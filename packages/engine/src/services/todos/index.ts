import * as Sentry from '@sentry/node'
import { Timestamp } from 'firebase-admin/firestore'
import * as functions from 'firebase-functions'
import { OpenAIApi } from 'openai'
import { v4 as uuid } from 'uuid'

import { StoredTodos } from '@recap/shared'

import { TranscriptService } from '../transcript'

export class MeetingTodos {
  constructor(private api: OpenAIApi, private transcript: TranscriptService) {}

  public async build(): Promise<StoredTodos> {
    const transcript = this.transcript.toString()

    const response = await this.api.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `Extract potential to-do's the following transcript.
  
            Return the answer as a JSON object using this format:

            {"todos": [...]}
        
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
        return {}
      }

      const { todos } = JSON.parse(content) as { todos: Array<string> }

      const formatted: StoredTodos = {}
      for (const todo of todos) {
        const id = uuid()
        formatted[id] = {
          text: todo,
          completed: false,
          created: Timestamp.fromDate(new Date()) as any,
          updated: Timestamp.fromDate(new Date()) as any
        }
      }

      return formatted
    } catch (err) {
      functions.logger.error('An error occurred while formatting todos')
      Sentry.captureException(new Error('An error occurred while formatting todos'))
    }

    return {}
  }
}
