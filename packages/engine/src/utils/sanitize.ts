import { Conversation } from '@recap/shared'

import { includes, normalize, similarity } from '.'

/**
 * Removes duplicates from a list of messages in order to have a readable and meaningful transcript.
 * @param transcript The list of messages to sanitize
 * @param similarityFactor At which point should we consider two messages to be different ones. Note a similarity factor of 0 means that two messages in the transcript are entirely different and 1 means they are the same message
 * @returns
 */
export const sanitize = (transcript: Conversation, similarityFactor: number = 0.8): Conversation => {
  const result: Conversation = []

  for (let i = 0; i < transcript.length; i++) {
    const msgA = transcript[i]
    const msgB = transcript[i + 1]

    // If speaker or text is empty, skip
    if (!msgA.speaker.trim() || !msgA.text.trim()) {
      continue
    }

    // We are at the last message, we can then include it to the transcript
    if (i + 1 >= transcript.length) {
      const lastMessage = transcript[i]
      result.push(lastMessage)

      continue
    }

    // If the next message is from someone else, we can
    // include the current message to the transcript
    if (msgA.speaker !== msgB.speaker) {
      result.push(msgA)

      continue
    }

    const normalizedA = normalize(msgA.text)
    const normalizedB = normalize(msgB.text)
    // Now, only include messages that **are not** a subset of the next message or are really similar
    // Handles cases where strings are the same or empty
    if (!includes(normalizedB, normalizedA) && similarity(normalizedA, normalizedB) < similarityFactor) {
      result.push(msgA)
    }
  }

  return result
}
