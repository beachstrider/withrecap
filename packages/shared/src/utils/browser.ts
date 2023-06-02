import { detect } from 'detect-browser'
import { toast } from '../components/toast'
import { IS_EXTENSION_INSTALLED, RequestTypes } from '../constants'
import { createAuthToken } from '../functions'

export const browser = detect()

export const extensionId = process.env.CHROME_WEBSTORE_LINK?.split(
  'https://chrome.google.com/webstore/detail/recap/'
)[1]

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

  console.debug('send customToken to extension - ', extensionId)

  try {
    chrome.runtime.sendMessage(extensionId!, { type: RequestTypes.LOGIN, token }, ({ err }) => {
      if (err) {
        console.error('Extension login failed,', err)
      }
    })

    localStorage.setItem(IS_EXTENSION_INSTALLED, 'TRUE')
  } catch (err) {
    console.error('Transfer login failed,', err)

    localStorage.removeItem(IS_EXTENSION_INSTALLED)
  }
}

// Send notification to extension to logout
export const transferLogout = async () => {
  try {
    chrome.runtime.sendMessage(extensionId!, { type: RequestTypes.LOGOUT }, ({ err }) => {
      if (err) {
        console.error('Extension login failed,', err)
      }
    })

    localStorage.setItem(IS_EXTENSION_INSTALLED, 'TRUE')
  } catch (err) {
    console.error('Transfer logout failed,', err)

    localStorage.removeItem(IS_EXTENSION_INSTALLED)
  }
}

// Check if extension is installed
export const isInstalled = () => {
  if (localStorage.getItem(IS_EXTENSION_INSTALLED)) {
    return true
  }

  return false
}
