import { connectDatabaseEmulator, getDatabase } from 'firebase/database'

import { firebase } from '../firebase'

const rtdb = getDatabase(firebase)

if (process.env.USE_FIREBASE_EMULATORS === 'true') {
  connectDatabaseEmulator(rtdb, '127.0.0.1', 9000)
}

export { rtdb }
