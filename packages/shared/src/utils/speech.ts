import { normalize } from './string'

/**
 * Approximates the time in millisecond it took a speaker to say a sentence
 */
export const approximateSpeechTime = (sentence: string, speakingRateWPM: number = 150): number => {
  // Define the time per word in millisecond based on the WPM
  const timePerWord = (60 / speakingRateWPM) * 1000

  const words = normalize(sentence).split(' ')
  const numWords = words.length

  return numWords * timePerWord
}
