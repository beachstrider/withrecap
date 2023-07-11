import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions'

import { firebase } from '../firebase'
import { Recording } from '../types'

const functions = getFunctions(firebase)

if (process.env.USE_FIREBASE_EMULATORS === 'true') {
  connectFunctionsEmulator(functions, '127.0.0.1', 5001)
}

export const sendInviteEmails = httpsCallable<{ emails: string }>(functions, 'SendInviteEmails')
export const createAuthToken = httpsCallable(functions, 'CreateAuthToken')
export const updateRecording = httpsCallable<Recording>(functions, 'UpdateRecording')
