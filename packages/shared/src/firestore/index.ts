import { Timestamp, getFirestore } from 'firebase/firestore'

import { firebase } from '../auth/firebase'

export interface Timestamps {
  created?: Timestamp
  updated?: Timestamp
}

export const firestore = getFirestore(firebase)
