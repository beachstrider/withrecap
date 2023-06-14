import { getFunctions, httpsCallable } from 'firebase/functions'

import { firebase } from '../auth/firebase'

const functions = getFunctions(firebase)

export const sendInviteEmails = httpsCallable(functions, 'SendInviteEmails')
export const createAuthToken = httpsCallable(functions, 'CreateAuthToken')
export const updateRecording = httpsCallable(functions, 'UpdateRecording')
