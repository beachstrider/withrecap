import { CreateCompletionResponse, OpenAIApi } from 'openai'

import { TranscriptService } from '../transcript'

export class MeetingSummary {
  constructor(private api: OpenAIApi, private transcript: TranscriptService) {}

  public async build(): Promise<CreateCompletionResponse> {
    const transcript = this.transcript.toString()

    const response = await this.api.createCompletion({
      model: 'text-davinci-003',
      prompt: `Can you summarize this transcript in less than 500 words: \n${transcript}`,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    })

    return response.data
  }
}
