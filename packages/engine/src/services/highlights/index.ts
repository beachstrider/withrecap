import * as functions from 'firebase-functions'
import * as Sentry from '@sentry/node'
import { OpenAIApi } from 'openai'
import { Highlights } from '@recap/shared'

import { TranscriptService } from '../transcript'

export class MeetingHighlights {
  constructor(private api: OpenAIApi, private transcript: TranscriptService) {}

  public async build(): Promise<Highlights> {
    const transcript = this.transcript.toString()

    const response = await this.api.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `Extract around 6 relevant highlights from the following transcript.
  
            Return the answer as a JSON object using this format:
    
            "highlights": [{
              "speaker": string,
              "text": string
            }...]
    
            Format the text property in markdown adding bold emphasis on the most relevant part of the highlight.
        
            Transcript:

            ${transcript}

            End of transcript`
        }
      ],
      temperature: 0,
      max_tokens: 500, // Limits the todos to 500 words
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    })

    try {
      const content = response.data.choices?.[0].message?.content

      if (!content) {
        return []
      }

      const { highlights } = JSON.parse(content) as { highlights: Highlights }

      return highlights
    } catch (err) {
      functions.logger.error('An error occurred while formatting highlights')
      Sentry.captureException(new Error('An error occurred while formatting highlights', { cause: err }))
    }

    return []
  }
}
