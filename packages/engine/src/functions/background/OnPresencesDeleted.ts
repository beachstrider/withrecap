import * as Sentry from '@sentry/node'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import * as functions from 'firebase-functions'

import { Meeting, MeetingMetadata, User } from '@recap/shared'

import { db, mail as mailgun, openai, settings } from '../../config'
import { MeetingHighlights } from '../../services/highlights'
import { MailService, Templates } from '../../services/mail'
import { MeetingService } from '../../services/meeting'
import { MeetingSummary } from '../../services/summary'
import { MeetingTodos } from '../../services/todos'
import { TranscriptService } from '../../services/transcript'
import { debug, error, warn } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

dayjs.extend(timezone)
dayjs.extend(utc)

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const OnPresencesDeleted = functions
  .runWith(options)
  .database.ref('/presences/{mid}')
  .onDelete(
    SentryWrapper<
      [
        functions.database.DataSnapshot,
        functions.EventContext<{
          mid: string
        }>
      ]
    >('OnPresenceDeleted', 'functions.database.ref.onDelete', async (_, { params: { mid } }) => {
      debug('OnPresencesDeleted started')

      const doc = db.collection('meetings').doc(mid)
      const snapshot = await doc.get()
      const meeting = (await snapshot.data()) as Meeting

      const { emails } = meeting

      // Determine whether a meeting is ended or an attendee's just leaving
      debug('meeting ended, generating summary, todos, and highlights...')

      if (!meeting.conversation.length) {
        // Update values on the database
        await doc.set({ processed: true }, { merge: true })
        return warn('conversation is empty, skipping processing...')
      }

      const transcript = new TranscriptService(meeting.conversation)
      const meetingSummary = new MeetingSummary(openai, transcript)
      const meetingTodos = new MeetingTodos(openai, transcript)
      const meetingHighlights = new MeetingHighlights(openai, transcript)

      const meetingService = new MeetingService(meeting)

      const summary = (await meetingSummary.build()) || ''
      const todos = await meetingTodos.build()
      const highlights = await meetingHighlights.build()

      if (summary) {
        const percentage = transcript.frequencies()

        const metadata: MeetingMetadata = {
          ...meetingService.metadata(),
          percentage
        }

        // Update values on the database
        await doc.set(
          {
            summary,
            todos,
            highlights,
            metadata,
            processed: true
          },
          { merge: true }
        )

        debug('summary, todos, highlights generated')

        debug('sending emails to attendees')
        const mail = new MailService(mailgun, settings.domain)

        for (const email of emails) {
          const document = await db.collection('users').where('email', '==', email).limit(1).get()

          let user: User | undefined
          document.forEach((doc) => (user = doc.data() as User))

          // We currently only send email to users with an account
          if (!user) continue

          try {
            debug(`infering missing user info...`)
            // HACK: Update the attendee's display name if the matching account has one
            if (user.displayName) meeting.attendees[user.email].name = user.displayName
            if (user.photoURL) meeting.attendees[user.email].avatar = user.photoURL

            // HACK: Add missing email in conversation and highlights
            if (user.displayName) {
              meeting.conversation = meeting.conversation.map((message) => {
                if (!message.email && user!.displayName === message.speaker) {
                  return { ...message, email: user!.email }
                }
                return message
              })
              Object.entries(highlights).forEach(([id, highlight]) => {
                if (!highlight.email && user!.displayName === highlight.speaker) {
                  highlights[id] = { ...highlight, email: user!.email }
                } else {
                  highlights[id] = highlight
                }
                return true
              })
            }

            debug('user info infered')
          } catch (err) {
            error(err)
            Sentry.captureException(err)
          }

          const timezone = user.timezone || DEFAULT_TIMEZONE
          const startTime = dayjs(meeting.start).tz(timezone).format('h:mm A')
          const endTime = dayjs(meeting.end).tz(timezone).format('h:mm A')

          try {
            debug(`sending email to ${email}...`)

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

            debug('emails sent')
          } catch (err) {
            error('An error occurred while sending an email to', email)
            Sentry.captureException(new Error(`An error occurred while sending an email to ${email}`))
          }
        }

        debug('inserting infered user data in meeting')

        // Update values on the database
        await doc.set({ attendees: meeting.attendees, conversation: meeting.conversation, highlights }, { merge: true })

        debug('meeting updated successfully')
      }
    })
  )
