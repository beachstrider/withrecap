import { Conversation, MeetingMetadata, Message } from '@recap/shared'

import { approximateSpeechTime } from '../../utils/speech'

export class TranscriptService {
  private transcript: Conversation

  constructor(conversation: Conversation) {
    this.transcript = conversation
  }

  public toText(): string {
    return this.transcript.map((m: Message) => `${m.speaker}: ${m.text}`).join('\n')
  }

  public toString(): string {
    return JSON.stringify(this.transcript)
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
