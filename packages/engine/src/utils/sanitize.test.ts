import path from 'path'

import { sanitize } from './sanitize'

import transcript from './testdata/transcript.json'

describe('sanitize', () => {
  test('it should return an array with a sanitized transcript', () => {
    const sanitized = sanitize(transcript)

    expect(sanitized).toMatchGolden(path.join(__dirname, './testdata/transcript.golden'))
  })

  test('it should return all messages if factor is too high', () => {
    const factor = 0.95
    const transcript = [
      { speaker: 'A', text: 'Hey how are thou' },
      { speaker: 'A', text: 'Hey how are you' }
    ]

    const sanitized = sanitize(transcript, factor)

    expect(sanitized).toEqual(transcript)
  })

  test('it should remove messages that are similar when factor is too low', () => {
    const factor = 0.5
    const transcript = [
      { speaker: 'A', text: 'Hey how are you doing today kevin' },
      { speaker: 'A', text: 'Hey how are you doing today joe' },
      { speaker: 'A', text: 'Hey how are you doing today bob' },
      { speaker: 'A', text: 'Hey how are you doing today steeve' }
    ]

    const sanitized = sanitize(transcript, factor)

    expect(sanitized).toEqual([transcript[transcript.length - 1]])
  })

  test('it should return an empty array', () => {
    const sanitized = sanitize([])

    expect(sanitized).toEqual([])
  })
})
