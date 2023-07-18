import * as Sentry from '@sentry/node'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import * as functions from 'firebase-functions'

import { Meeting, MeetingMetadata, User } from '@recap/shared'

import { db, mail as mailgun, openai, realtime, settings } from '../../config'
import { MeetingHighlights } from '../../services/highlights'
import { MailService, Templates } from '../../services/mail'
import { MeetingService } from '../../services/meeting'
import { MeetingSummary } from '../../services/summary'
import { MeetingTodos } from '../../services/todos'
import { TranscriptService } from '../../services/transcript'
import { debug, error, warn } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

dayjs.extend(timezone)

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const OnPresenceDeleted = functions
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
      debug('OnPresenceDeleted started')

      const ref = realtime.ref(`/presences/${mid}`)
      const payload = await ref.once('value')
      const presences = payload.val()

      const doc = db.collection('meetings').doc(mid)
      const snapshot = await doc.get()
      const meeting = (await snapshot.data()) as Meeting

      const { emails } = meeting

      // Determine whether a meeting is ended or an attendee's just leaving
      if (presences === null) {
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

        const summary = await meetingSummary.build()
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
              summary: summary || '',
              todos: todos,
              highlights: highlights,
              metadata: metadata,
              processed: true
            },
            { merge: true }
          )

          debug('summary, todos, highlights generated')

          debug('sending emails to attendees')
          const mail = new MailService(mailgun, settings.domain)

          for (const email of emails) {
            try {
              const document = await db.collection('users').where('email', '==', email).limit(1).get()

              let user: User | undefined
              document.forEach((doc) => (user = doc.data() as User))

              // We currently only send email to users with an account
              if (!user) continue

              // HACK: Update the attendee's display name if the matching account has one
              if (user.displayName) meeting.attendees[user.email].name = user.displayName
              if (user.photoURL) meeting.attendees[user.email].avatar = user.photoURL

              // HACK: Add missing email in conversation
              if (user.displayName) {
                meeting.conversation = meeting.conversation.map((message) => {
                  if (!message.email && user!.displayName === message.speaker) {
                    return { ...message, email: user!.email }
                  }
                  return message
                })
              }

              debug(`sending email to ${email}...`)

              const timezone = user.timezone || DEFAULT_TIMEZONE
              const startTime = dayjs(meeting.start).tz(timezone).format('h:mm A')
              const endTime = dayjs(meeting.end).tz(timezone).format('h:mm A')

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

          debug('updating missed data in meeting')

          // Update values on the database
          await doc.set({ attendees: meeting.attendees, conversation: meeting.conversation }, { merge: true })

          debug('meeting updated successfully')
        }
      }
    })
  )
