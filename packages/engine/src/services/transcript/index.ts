import { Conversation, MeetingMetadata } from '@recap/shared'

import { sanitize } from '../../utils/sanitize'
import { approximateSpeechTime } from '../../utils/speech'

export class TranscriptService {
  private transcript: Conversation

  constructor(conversation: Conversation) {
    this.transcript = sanitize(conversation, 0.8)
  }

  public toString(): string {
    return this.transcript.map((m) => `${m.speaker}: ${m.text}`).join('\n')
  }

  public toTranscript(): Conversation {
    return this.transcript
  }

  public metadata(): MeetingMetadata['percentage'] {
    let totalTime = 0
    let timePerSpeaker: MeetingMetadata['percentage'] = {}

    for (const msg of this.transcript) {
      const time = approximateSpeechTime(msg.text, 150)

      if (!timePerSpeaker[msg.speaker]) {
        timePerSpeaker[msg.speaker] = 0
      }

      timePerSpeaker[msg.speaker] += time
      totalTime += time
    }

    for (const speaker in timePerSpeaker) {
      timePerSpeaker[speaker] = timePerSpeaker[speaker] / totalTime
    }

    return timePerSpeaker
  }
}
