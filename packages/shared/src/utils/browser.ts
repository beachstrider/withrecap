import { detect } from 'detect-browser'
import { toast } from '../components/toast'
import { IS_EXTENSION_INSTALLED, RequestTypes } from '../constants'
import { createAuthToken } from '../functions'

export const browser = detect()

// Transfer custom token to extension
export const transferLogin = async () => {
  let token: string

  try {
    const { data } = (await createAuthToken()) as { data: { token: string } }

    token = data.token
  } catch (err) {
    toast.error('An error occured while extension login', err)

    return
  }

  try {
    await chrome.runtime.sendMessage(process.env.EXTENSION_ID!, { type: RequestTypes.LOGIN, token })

    localStorage.setItem(IS_EXTENSION_INSTALLED, 'TRUE')
  } catch (err) {
    console.error('Transfer login failed,', err)

    localStorage.removeItem(IS_EXTENSION_INSTALLED)
  }
}

// Send notification to extension to logout
export const transferLogout = async () => {
  try {
    await chrome.runtime.sendMessage(process.env.EXTENSION_ID!, { type: RequestTypes.LOGOUT })
  } catch (err) {
    console.error('Transfer logout failed,', err)
  }
}

// Check if extension is installed
export const isInstalled = () => {
  if (localStorage.getItem(IS_EXTENSION_INSTALLED)) {
    return true
  }

  return false
}
