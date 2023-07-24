import * as Sentry from '@sentry/node'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import * as functions from 'firebase-functions'

import { Meeting, User } from '@recap/shared'

import { db, mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { debug, error } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

interface Payload {
  // We expect to receive a list of emails separated by commas
  emails: string
  mid: string
}

dayjs.extend(timezone)
dayjs.extend(utc)

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const SendSharingEmails = functions.https.onCall(
  SentryWrapper<[Payload, functions.https.CallableContext]>(
    'SendSharingEmails',
    'functions.https.onCall',
    async ({ emails, mid }, context) => {
      if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
      }

      debug('SendSharingEmails started')

      const doc = db.collection('meetings').doc(mid)
      const snapshot = await doc.get()
      const meeting = (await snapshot.data()) as Meeting

      const mail = new MailService(mailgun, settings.domain)

      for (const email of emails) {
        const document = await db.collection('users').where('email', '==', email).limit(1).get()

        let user: User | undefined
        document.forEach((doc) => (user = doc.data() as User))

        // We currently only send email to users with an account
        if (!user) continue

        const timezone = user.timezone || DEFAULT_TIMEZONE
        const startTime = dayjs(meeting.start).tz(timezone).format('h:mm A')
        const endTime = dayjs(meeting.end).tz(timezone).format('h:mm A')

        try {
          debug(`sending email to ${email}...`)

          await mail.send(Templates.MeetingEnd, {
            email: email,
            meetingMetadata: {
              title: meeting.title,
              participants: meeting.metadata!.participants,
              start: startTime,
              end: endTime,
              url: meeting.metadata!.url
            },
            appUrl: settings.baseURL
          })

          debug('emails sent')
        } catch (err) {
          error('An error occurred while sending an email to', email)
          Sentry.captureException(new Error(`An error occurred while sending an email to ${email}`))
        }
      }

      return { msg: 'ok' }
    }
  )
)
