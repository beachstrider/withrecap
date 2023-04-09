import { Settings, initializeFirestore } from 'firebase/firestore/lite'

import { firebase } from '../../auth/firebase'

const firestoreSettings: Settings = {}

export const firestore = initializeFirestore(firebase, firestoreSettings)
