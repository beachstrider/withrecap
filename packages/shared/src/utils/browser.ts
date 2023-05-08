import { detect } from 'detect-browser'
import { RequestTypes } from '../constants/requestTypes'
import { createAuthToken } from '../functions'

export const browser = detect()

// Transfer custom token to extension
export const shareLogin = async () => {
  try {
    const {
      data: { token }
    } = (await createAuthToken()) as { data: { token: string } }

    await chrome.runtime.sendMessage(process.env.EXTENSION_ID!, { type: RequestTypes.LOGIN, token })

    return true
  } catch (err) {
    console.error('Auth sharing failed,', err)

    return false
  }
}
