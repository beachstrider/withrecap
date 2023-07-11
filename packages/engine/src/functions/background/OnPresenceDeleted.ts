import * as Sentry from '@sentry/node'
import { formatInTimeZone } from 'date-fns-tz'
import { FieldValue } from 'firebase-admin/firestore'
import * as functions from 'firebase-functions'

import { Meeting, MeetingMetadata, User } from '@recap/shared'

import { db, mail as mailgun, openai, realtime, settings } from '../../config'
import { MeetingHighlights } from '../../services/highlights'
import { MailService, Templates } from '../../services/mail'
import { MeetingService } from '../../services/meeting'
import { MeetingSummary } from '../../services/summary'
import { MeetingTodos } from '../../services/todos'
import { TranscriptService } from '../../services/transcript'
import { SentryWrapper } from '../../utils/sentry'

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const OnPresenceDeleted = functions
  .runWith(options)
  .database.ref('/presences/{mid}/{email}')
  .onDelete(
    SentryWrapper<
      [
        functions.database.DataSnapshot,
        functions.EventContext<{
          mid: string
          email: string
        }>
      ]
    >(
      'OnPresenceDeleted',
      'functions.database.ref.onDelete',
      async (statusSnapshot, { params: { mid, email: _email } }) => {
        functions.logger.debug('OnPresenceDeleted started')

        const ref = realtime.ref(`/presences/${mid}`)
        const payload = await ref.once('value')
        const presences = payload.val()

        const doc = db.collection('meetings').doc(mid)
        const snapshot = await doc.get()
        const meeting = (await snapshot.data()) as Meeting

        const emails = meeting.emails
        const recording = statusSnapshot.val()

        // Determine whether a meeting is ended or an attendee's just leaving
        if (presences === null) {
          functions.logger.debug('meeting ended, generating summary, todos, and highlights...')

          if (!meeting.conversation.length) {
            // Update values on the database
            await doc.set({ processed: true }, { merge: true })
            return functions.logger.warn('conversation is empty, skipping processing...')
          }

          const transcript = new TranscriptService(meeting.conversation)
          const meetingSummary = new MeetingSummary(openai, transcript)
          const meetingTodos = new MeetingTodos(openai, transcript)
          const meetingHighlights = new MeetingHighlights(openai, transcript)

          const meetingService = new MeetingService(meeting)

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
            await doc.set(
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
                if (user.displayName) meeting.attendees[user.email].name = user.displayName

                functions.logger.debug(`sending email to ${email}...`)

                const timezone = user.timezone || DEFAULT_TIMEZONE
                const startTime = formatInTimeZone(meeting.start, timezone, 'h:mm a')
                const endTime = formatInTimeZone(meeting.end, timezone, 'h:mm a')

                await mail.send(Templates.MeetingEnd, {
                  email: email,
                  meetingMetadata: {
                    title: meeting.title,
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
                Sentry.captureException(new Error(`An error occurred while sending an email to ${email}`))
              }
            }

            functions.logger.debug('updating meeting with corresponding user names')

            // Update values on the database
            await doc.set({ attendees: meeting.attendees, recorder: FieldValue.delete() }, { merge: true })

            functions.logger.debug('meeting updated successfully')
          }
        } else {
          // If the user was a recorder, delegate another one as a recorder
          if (recording) {
            const nextPresence = Object.keys(presences)[0]
            await realtime.ref(`/presences/${mid}/${nextPresence}`).set(true)
          }
        }
      }
    )
  )
