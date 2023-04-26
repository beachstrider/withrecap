import { Settings, Timestamp, initializeFirestore } from 'firebase/firestore/lite'

import { firebase } from '../../auth/firebase'

export interface Timestamps {
  created?: Timestamp
  updated?: Timestamp
}

const firestoreSettings: Settings = {}

export const firestore = initializeFirestore(firebase, firestoreSettings)
