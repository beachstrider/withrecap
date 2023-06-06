import { Meeting, MeetingMetadata, User } from '@recap/shared'
import * as Sentry from '@sentry/node'
import { formatInTimeZone } from 'date-fns-tz'
import * as functions from 'firebase-functions'

import { db, mail as mailgun, openai, settings } from '../../config'
import { MeetingHighlights } from '../../services/highlights'
import { MailService, Templates } from '../../services/mail'
import { MeetingService } from '../../services/meeting'
import { MeetingSummary } from '../../services/summary'
import { MeetingTodos } from '../../services/todos'
import { TranscriptService } from '../../services/transcript'
import { isCohere } from '../../utils/misc'
import { SentryWrapper } from '../../utils/sentry'

export const DEFAULT_TIMEZONE = 'America/Montreal'

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const OnMeetingUpdated = functions
  .runWith(options)
  .firestore.document('meetings/{docId}')
  .onUpdate(
    SentryWrapper<
      [
        functions.Change<functions.firestore.QueryDocumentSnapshot>,
        functions.EventContext<{
          docId: string
        }>
      ]
    >('OnMeetingUpdated', 'functions.firestore.document.onUpdate', async (change, context) => {
      functions.logger.debug('engine called for meeting id:', context.params.docId)

      const oldValue = change.before.data() as Meeting
      const newValue = change.after.data() as Meeting

      const emails = newValue.emails
      const cohere = isCohere(emails)

      if (oldValue.ended === false && newValue.ended === true) {
        functions.logger.debug('meeting ended, generating summary, todos, and highlights...')

        if (!newValue.conversation) {
          return functions.logger.warn('meeting transcript is empty, skipping processing...')
        }

        const transcript = new TranscriptService(newValue.conversation)
        const meetingSummary = new MeetingSummary(openai, transcript, cohere)
        const meetingTodos = new MeetingTodos(openai, transcript)
        const meetingHighlights = new MeetingHighlights(openai, transcript)

        const meetingService = new MeetingService(newValue)

        const summary = await meetingSummary.build()
        const todos = await meetingTodos.build()
        const highlights = await meetingHighlights.build()

        if (summary) {
          const percentage = transcript.metadata()

          functions.logger.debug('summary and todos generated')

          const metadata: MeetingMetadata = {
            ...meetingService.metadata(),
            percentage
          }

          functions.logger.debug('metadata generated')

          functions.logger.debug('updating meeting with relevant information...')

          // Update values on the database
          await change.after.ref.set(
            {
              summary: summary || '',
              todos: todos,
              highlights: highlights,
              metadata: metadata,
              processed: true
            },
            { merge: true }
          )

          functions.logger.debug('meeting updated successfully')

          functions.logger.debug('sending emails to attendees')
          const mail = new MailService(mailgun, settings.domain)

          for (const email of emails) {
            try {
              const document = await db.collection('users').where('email', '==', email).limit(1).get()

              let user: User | undefined
              document.forEach((doc) => (user = doc.data() as User))

              // We currently only send email to users with an account
              if (!user) continue

              // Update the attendee's display name if the matching account has one
              if (user.displayName) newValue.attendees[user.email].name = user.displayName

              functions.logger.debug(`sending email to ${email}...`)

              const timezone = user.timezone || DEFAULT_TIMEZONE
              const startTime = formatInTimeZone(newValue.start, timezone, 'h:mm a')
              const endTime = formatInTimeZone(newValue.end, timezone, 'h:mm a')

              await mail.send(Templates.MeetingEnd, {
                email: email,
                meetingMetadata: {
                  title: newValue.title,
                  participants: metadata.participants,
                  start: startTime,
                  end: endTime,
                  url: metadata.url
                },
                appUrl: settings.baseURL
              })

              functions.logger.debug('email sent')
            } catch (err) {
              functions.logger.error('An error occurred while sending an email to', email)
              Sentry.captureException(new Error(`An error occurred while sending an email to ${email}`, { cause: err }))
            }
          }

          functions.logger.debug('updating meeting with corresponding user names')

          // Update values on the database
          await change.after.ref.set({ attendees: newValue.attendees }, { merge: true })

          functions.logger.debug('meeting updated successfully')
        }
      }
    })
  )
