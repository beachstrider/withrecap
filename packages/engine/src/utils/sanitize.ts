type Message = {
  speaker: string
  text: string
}
export type Transcript = Array<Message>

/**
 * Uses Jaccard Index to compute the similarity between two strings
 * https://en.wikipedia.org/wiki/Jaccard_index
 */
const similarity = (s1: string, s2: string): number => {
  const union = new Set(s1.split('').concat(s2.split('')))
  const intersection = new Set(s1.split('').filter((v) => new Set(s2).has(v)))

  return (1.0 * intersection.size) / union.size
}

/**
 * Checks whether s2 is a subset of s1
 */
const includes = (s1: string, s2: string): boolean => {
  return s1.includes(s2)
}

/**
 * Converts to lower case and removes all non words from the string
 */
const normalize = (str: string): string => {
  return str.toLowerCase().replace(/[^\w\s]/g, '')
}

/**
 * Removes duplicates from a list of messages in order to have a readable and meaningful transcript.
 * @param transcript The list of messages to sanitize
 * @param similarityFactor At which point should we consider two messages to be different ones. Note a similarity factor of 0 means that two messages in the transcript are entirely different and 1 means they are the same message
 * @returns
 */
export const sanitize = (transcript: Transcript, similarityFactor: number = 0.8): Transcript => {
  const result: Transcript = []

  for (let i = 0; i < transcript.length; i++) {
    // We are at the last message, we can then include it to the transcript
    if (i + 1 >= transcript.length) {
      const lastMessage = transcript[i]
      result.push(lastMessage)

      continue
    }

    const msgA = transcript[i]
    const msgB = transcript[i + 1]

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
