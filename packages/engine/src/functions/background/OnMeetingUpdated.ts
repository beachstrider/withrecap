import { Meeting, MeetingMetadata } from '@recap/shared'
import * as functions from 'firebase-functions'

import { mail as mailgun, openai, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { MeetingService } from '../../services/meeting'
import { MeetingSummary } from '../../services/summary'
import { TranscriptService } from '../../services/transcript'

export const OnMeetingUpdated = functions.firestore.document('meetings/{docId}').onUpdate(async (change, context) => {
  try {
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
        const mail = new MailService(mailgun, settings.domain)
        // TODO: Who should we email?
        for (const email of newValue.emails) {
          functions.logger.debug(`sending email to ${email}...`)

          await mail.send(Templates.MeetingEnd, {
            email: email,
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
