import { Transcript } from '../../types'
import { sanitize } from '../../utils/sanitize'
import { approximateSpeechTime } from '../../utils/speech'

export type Metadata = {
  [speaker: string]: number
}

export class TranscriptService {
  private transcript: Transcript

  constructor(conversation: Transcript) {
    this.transcript = sanitize(conversation, 0.8)
  }

  public toString(): string {
    return this.transcript.map((m) => `${m.speaker}: ${m.text}`).join('\n')
  }

  public toTranscript(): Transcript {
    return this.transcript
  }

  public metadata(): Metadata {
    let totalTime = 0
    let timePerSpeaker: Metadata = {}

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
