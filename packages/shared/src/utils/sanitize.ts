import { Conversation, Message } from '../firestore/meetings/conversation'
import { alphabets, normalize } from './string'

/**
 * Removes duplicates from a list of messages in order to have a readable and meaningful transcript.
 */

export const sanitize = (input: Conversation): Conversation => {
  const patternLength = 10

  let differentTextAll = ''

  const output: Conversation = []

  // Loop each message of entire conversation
  for (let i = 0; i < input.length - 1; i++) {
    const messageA = input[i]
    const messageB = input[i + 1]

    const normalizedA = normalize(messageA.text)

    const alphabetedA = alphabets(messageA.text)
    const alphabetedB = alphabets(messageB.text)

    const patternText = messageB.text.substring(0, patternLength)
    const normalizedPatternText = normalize(patternText)

    // If speaker or text is empty, skip
    if (!messageA.speaker.trim() || !messageA.text.trim()) {
      continue
    }

    // If not the last loop
    if (i !== input.length - 2) {
      // If this speaker is same as the next speaker
      if (messageA.speaker === messageB.speaker) {
        const splits = normalizedA.split(normalizedPatternText)
        // Exceptions in difference; ex: 'Hi', 'Hi, I am'
        // Here 'Hi' is not a real difference
        if (splits.length !== 1 || !alphabetedB.startsWith(alphabetedA)) {
          const normalizedDifferentText = splits[0]
          differentTextAll += messageA.text.substring(0, normalizedDifferentText.length)
        }
      }
      // If the next speaker is different from this speaker
      else {
        differentTextAll += messageA.text

        const messageOfThisSpeaker = {
          email: messageA.email,
          speaker: messageA.speaker,
          language: messageA.language,
          text: differentTextAll,
          timestamp: messageA.timestamp
        }

        output.push(messageOfThisSpeaker)
        differentTextAll = ''
      }
    }
    // If the last loop
    else {
      // If this speaker is same as the next speaker
      if (messageA.speaker === messageB.speaker) {
        const splits = normalizedA.split(normalizedPatternText)
        const normalizedDifferentText = splits[0]
        differentTextAll += messageA.text.substring(0, normalizedDifferentText.length) + messageB.text

        const messageOfThisSpeaker: Message = {
          email: messageA.email,
          speaker: messageA.speaker,
          language: messageA.language,
          text: differentTextAll,
          timestamp: messageA.timestamp
        }

        output.push(messageOfThisSpeaker)
        differentTextAll = ''
      }
      // If the next speaker is different from this speaker
      else {
        differentTextAll += messageA.text

        const messageOfSpeakerA: Message = {
          email: messageA.email,
          speaker: messageA.speaker,
          language: messageA.language,
          text: differentTextAll,
          timestamp: messageA.timestamp
        }

        output.push(messageOfSpeakerA)
        differentTextAll = ''

        differentTextAll += messageB.text

        const messageOfSpeakerB: Message = {
          email: messageB.email,
          speaker: messageB.speaker,
          language: messageB.language,
          text: differentTextAll,
          timestamp: messageB.timestamp
        }

        output.push(messageOfSpeakerB)
        differentTextAll = ''
      }
    }
  }

  return output
}
