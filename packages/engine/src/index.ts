import * as functions from 'firebase-functions'
import { MeetingSummary } from './services/summary'

import { openai } from './config'
import { TranscriptService } from './services/transcript'

export const engine = functions.firestore.document('meetings/{docId}').onUpdate(async (change, context) => {
  functions.logger.debug('engine called')

  const oldValue = change.before.data()
  const newValue = change.after.data()
  if (oldValue.ended === false && newValue.ended === true) {
    functions.logger.debug('meeting ended, generating summary...')

    const transcript = new TranscriptService(newValue.conversation)
    const meetingSummary = new MeetingSummary(openai, transcript)

    const response = await meetingSummary.build()
    functions.logger.debug('generated', JSON.stringify(response, undefined, 4))

    if (response.choices.length) {
      const metadata = transcript.metadata()
      const attendees = [...newValue.attendees]
      const summary = response.choices[0].text

      functions.logger.debug('summary', summary)

      attendees.map((a) => ({ ...a, time: metadata[a.name] }))

      // Update values on the database
      return change.after.ref.set(
        {
          summary: summary || '',
          transcript: transcript.toString(),
          attendees: attendees
        },
        { merge: true }
      )
    }
  }
})
