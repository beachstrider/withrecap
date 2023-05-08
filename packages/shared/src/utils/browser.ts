import { detect } from 'detect-browser'
import { IS_EXTENSION_INSTALLED, RequestTypes } from '../constants'
import { createAuthToken } from '../functions'

export const browser = detect()

// Transfer custom token to extension
export const shareAuth = async () => {
  try {
    const {
      data: { token }
    } = (await createAuthToken()) as { data: { token: string } }

    await chrome.runtime.sendMessage(process.env.EXTENSION_ID!, { type: RequestTypes.LOGIN, token })

    localStorage.setItem(IS_EXTENSION_INSTALLED, 'TRUE')
  } catch (err) {
    console.error('Auth sharing failed,', err)

    localStorage.removeItem(IS_EXTENSION_INSTALLED)
  }
}

export const isInstalled = () => {
  if (localStorage.getItem(IS_EXTENSION_INSTALLED)) {
    return true
  }

  return false
}
