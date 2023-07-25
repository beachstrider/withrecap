import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions'

import { firebase } from '../firebase'

const functions = getFunctions(firebase)

if (process.env.USE_FIREBASE_EMULATORS === 'true') {
  connectFunctionsEmulator(functions, '127.0.0.1', 5001)
}

export const sendInviteEmails = httpsCallable<{ emails: string }>(functions, 'SendInviteEmails')
export const sendSharingEmails = httpsCallable<{ emails: string; mid: string }>(functions, 'SendSharingEmails')
export const createAuthToken = httpsCallable(functions, 'CreateAuthToken')
