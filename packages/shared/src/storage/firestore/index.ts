import { firebase } from '../../auth/firebase'
import { Timestamp, getFirestore } from 'firebase/firestore'

export interface Timestamps {
  created?: Timestamp
  updated?: Timestamp
}

export const firestore = getFirestore(firebase)
