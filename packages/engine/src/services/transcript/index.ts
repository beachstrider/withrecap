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
    return JSON.stringify(
      this.transcript.map((message: Message) => ({
        email: message.email,
        speaker: message.speaker,
        text: message.text
      }))
    )
  }

  public frequencies(): MeetingMetadata['percentage'] {
    let totalTime = 0
    let percentage: MeetingMetadata['percentage'] = []

    for (const msg of this.transcript) {
      const time = approximateSpeechTime(msg.text, 150)
      const timePerSpeaker = percentage.find((el) => el.email === msg.email || el.speaker === msg.speaker)

      if (!timePerSpeaker) {
        const newTimePerSpeaker = {
          email: msg.email,
          speaker: msg.speaker,
          amount: time
        }

        percentage.push(newTimePerSpeaker)
      } else {
        timePerSpeaker.amount += time
      }

      totalTime += time
    }

    for (const el of percentage) {
      el.amount = el.amount / totalTime
    }

    return percentage
  }
}
