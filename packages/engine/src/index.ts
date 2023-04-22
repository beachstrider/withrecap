import * as functions from 'firebase-functions'
import { User, Meeting, MeetingMetadata } from '@recap/shared'

import { MeetingSummary } from './services/summary'
import { openai, mail as mailgun, DOMAIN } from './config'
import { TranscriptService } from './services/transcript'
import { MailService, Templates } from './services/mail'
import { MeetingService } from './services/meeting'

export const engine = functions.firestore.document('meetings/{docId}').onUpdate(async (change, context) => {
  try {
    functions.logger.debug('engine called')

    const oldValue = change.before.data() as Meeting
    const newValue = change.after.data() as Meeting
    if (oldValue.ended === false && newValue.ended === true) {
      functions.logger.debug('meeting ended, generating summary...')

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

        functions.logger.debug('updating meeting with relevant information')

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
        const mail = new MailService(mailgun, DOMAIN)
        // TODO: Who should we email?
        for (const attendee of newValue.attendees) {
          functions.logger.debug(`sending email to ${attendee.email}...`)

          await mail.send(Templates.MeetingEnd, {
            email: attendee.email,
            meetingMetadata: {
              title: metadata.title,
              participants: metadata.participants,
              start: metadata.start,
              end: metadata.end,
              url: metadata.url
            }
          })

          functions.logger.debug('email sent')
        }
      }
    }
  } catch (err) {
    functions.logger.error('An error occurred while running the engine', err)
  }
})

export const userCreated = functions.firestore.document('users/{userId}').onCreate(async (snapshot, context) => {
  try {
    functions.logger.debug('new user signed up')

    const mail = new MailService(mailgun, DOMAIN)
    const user = snapshot.data() as User

    functions.logger.debug('sending welcome email...')

    await mail.send(Templates.Welcome, { email: user.email! })

    functions.logger.debug('welcome email sent with success')
  } catch (err) {
    functions.logger.error('An error occurred while running user created', err)
  }
})
