import { connectDatabaseEmulator, getDatabase } from 'firebase/database'

import { firebase } from '../firebase'

const realtime = getDatabase(firebase)

if (process.env.USE_FIREBASE_EMULATORS === 'true') {
  connectDatabaseEmulator(realtime, '127.0.0.1', 9000)
}

export { realtime }
