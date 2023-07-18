import { Timestamp, connectFirestoreEmulator, getFirestore } from 'firebase/firestore'

import { firebase } from '../firebase'

export interface Timestamps {
  created?: Timestamp
  updated?: Timestamp
}

const firestore = getFirestore(firebase)

if (process.env.USE_FIREBASE_EMULATORS === 'true') {
  connectFirestoreEmulator(firestore, '127.0.0.1', 8080)
}

export { firestore }
