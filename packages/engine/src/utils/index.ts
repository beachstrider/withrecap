/**
 * Uses Jaccard Index to compute the similarity between two strings
 * https://en.wikipedia.org/wiki/Jaccard_index
 */
export const similarity = (s1: string, s2: string): number => {
  const token1 = s1.split('')
  const token2 = s2.split('')
  const set2 = new Set(token2)

  const union = new Set(token1.concat(token2))
  const intersection = new Set(token1.filter((v) => set2.has(v)))

  return (1.0 * intersection.size) / union.size
}

/**
 * Checks whether s2 is a subset of s1
 */
export const includes = (s1: string, s2: string): boolean => {
  return s1.includes(s2)
}

/**
 * Converts to lower case and removes all non words from the string
 */
export const normalize = (str: string): string => {
  return str.toLowerCase().replace(/[^\w\s]/g, '')
}
