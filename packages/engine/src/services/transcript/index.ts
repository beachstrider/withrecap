import { Message, Transcript } from '../../types'
import { sanitize } from '../../utils/sanitize'

export class TranscriptService {
  private transcript: Transcript
  private messagesBySpeaker: { [speaker: string]: Message[] } = {}

  constructor(transcript: Transcript) {
    this.transcript = sanitize(transcript, 0.8)

    for (const msg of this.transcript) {
      if (!this.messagesBySpeaker[msg.speaker]?.length) {
        this.messagesBySpeaker[msg.speaker] = []
      }
      this.messagesBySpeaker[msg.speaker].push(msg)
    }
  }

  public getSpeakerMessages(speaker: string): Message[] | undefined {
    return this.messagesBySpeaker[speaker]
  }

  public toString(): string {
    return this.transcript.map((m) => `${m.speaker}: ${m.text}`).join('\n')
  }
}
