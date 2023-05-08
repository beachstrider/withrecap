import { detect } from 'detect-browser'
import { createAuthToken } from '../functions'
import { User } from '../storage/users'

export const browser = detect()

// Transfer custom token to extension
export const shareLogin = async (user: User) => {
  const {
    data: { token }
  } = (await createAuthToken()) as { data: { token: string } }

  if (user.extensionId) {
    await chrome.runtime.sendMessage(user.extensionId, { type: 'LOGIN', token })
  }
}
