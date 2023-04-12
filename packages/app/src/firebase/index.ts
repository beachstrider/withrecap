import { firebase } from '@recap/shared'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export * from 'firebase/firestore'
export const db = getFirestore(firebase)
export const auth = getAuth(firebase)
export const storage = getStorage(firebase)
export const analytics = getAnalytics(firebase)
