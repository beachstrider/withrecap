import { firebase } from '../auth/firebase'
import { Recording } from '../types'
import { getFunctions, httpsCallable } from 'firebase/functions'

const functions = getFunctions(firebase)

export const sendInviteEmails = httpsCallable<{ emails: string }>(functions, 'SendInviteEmails')
export const createAuthToken = httpsCallable(functions, 'CreateAuthToken')
export const updateRecording = httpsCallable<Recording>(functions, 'UpdateRecording')
