import * as functions from 'firebase-functions'
import { Meeting, MeetingMetadata, User } from '@recap/shared'
import * as Sentry from '@sentry/node'
import { formatInTimeZone } from 'date-fns-tz'

import { db, mail as mailgun, openai, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { MeetingService } from '../../services/meeting'
import { MeetingSummary } from '../../services/summary'
import { TranscriptService } from '../../services/transcript'
import { SentryWrapper } from '../../utils/sentry'

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const OnMeetingUpdated = functions.firestore.document('meetings/{docId}').onUpdate(
  SentryWrapper<[functions.Change<functions.firestore.QueryDocumentSnapshot>, functions.EventContext]>(
    'OnMeetingUpdated',
    'functions.firestore.document.onUpdate',
    async (change, _context) => {
      functions.logger.debug('engine called')

      const oldValue = change.before.data() as Meeting
      const newValue = change.after.data() as Meeting

      if (oldValue.ended === false && newValue.ended === true) {
        functions.logger.debug('meeting ended, generating summary...')

        if (newValue.conversation.length === 0) {
          return functions.logger.warn('meeting conversation is empty, skipping processing...')
        }

        const transcript = new TranscriptService(newValue.conversation)
        const meetingSummary = new MeetingSummary(openai, transcript)

        const meetingService = new MeetingService(newValue)

        const response = await meetingSummary.build()

        if (response.choices.length) {
          const percentage = transcript.metadata()
          const summary = response.choices[0].text

          functions.logger.debug('summary generated')

          const metadata: MeetingMetadata = {
            ...meetingService.metadata(),
            percentage: percentage
          }

          functions.logger.debug('metadata generated')

          functions.logger.debug('updating meeting with relevant information...')

          // Update values on the database
          await change.after.ref.set(
            {
              summary: summary || '',
              transcript: transcript.toTranscript(),
              metadata: metadata
            },
            { merge: true }
          )

          functions.logger.debug('meeting updated successfully')

          functions.logger.debug('sending emails to attendees')
          const mail = new MailService(mailgun, settings.domain)

          for (const email of newValue.emails) {
            try {
              const document = await db.collection('users').where('email', '==', email).limit(1).get()

              let user: User | undefined
              document.forEach((doc) => {
                user = doc.data() as User
              })

              // We currently only send email to users with an account
              if (!user) {
                continue
              }

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
        }
      }
    }
  )
)
