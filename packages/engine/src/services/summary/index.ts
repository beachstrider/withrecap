import { OpenAIApi } from 'openai'

import { TranscriptService } from '../transcript'

export class MeetingSummary {
  constructor(private api: OpenAIApi, private transcript: TranscriptService) {}

  public async build(): Promise<string | undefined> {
    const transcript = this.transcript.toString()

    const prompt = `Summarize the following transcript in 4 paragraphs, giving each a title, and spanning 7 sentences.
    The first one should be an introduction and the last one a conclusion.
    
    Adhere to the following guidelines:
    
      - DO NOT include unnecessary high-level information such as the name of the participants, date of event, or name of event.
      - Ensure the summary is coherent: A reader can move easily from one sentence to the next; reading the text as an integrated whole, rather than a series of separate sentences.
      - Ensure the summary is relevant: The summary should capture the essence of the transcript.
      - Output the result in markdown following the CommonMark spec with the titles in bold and above each paragraph.
    
    Transcript:
    
      ${transcript}
    
    End of transcript`

    const response = await this.api.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0,
      max_tokens: 500, // Limits the summary to 500 words
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    })

    return response.data.choices?.[0].message?.content
  }
}
