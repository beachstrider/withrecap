import * as functions from 'firebase-functions'
import { MeetingSummary } from './services/summary'

import { openai } from './config'
import { TranscriptService } from './services/transcript'

export const engine = functions.firestore.document('meetings/{docId}').onUpdate(async (change, context) => {
  functions.logger.debug('engine called')

  const newValue = change.after.data()
  if (newValue.meetingEnded) {
    functions.logger.debug('meeting ended, generating summary...')

    const transcript = new TranscriptService(newValue.conversation)
    const meetingSummary = new MeetingSummary(openai, transcript)

    const summary = await meetingSummary.build()
    functions.logger.debug('generated')

    if (summary.choices.length) {
      const smartSummary = summary.choices[0].text
      functions.logger.debug('summary', smartSummary)

      // Update values on the database
      return change.after.ref.set(
        {
          smartSummary: smartSummary || ''
        },
        { merge: true }
      )
    }
  }
})
