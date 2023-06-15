import { getFunctions, httpsCallable } from 'firebase/functions'

import { firebase } from '../auth/firebase'
import { Recording } from '../types'

const functions = getFunctions(firebase)

export const sendInviteEmails = httpsCallable<{ emails: string }>(functions, 'SendInviteEmails')
export const createAuthToken = httpsCallable(functions, 'CreateAuthToken')
export const updateRecording = httpsCallable<Recording>(functions, 'UpdateRecording')
