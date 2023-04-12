import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: functions.config().private.key.replace(/\\n/gm, '\n'),
    projectId: functions.config().project.id,
    clientEmail: functions.config().client.email
  }),
  databaseURL: 'https://recap-381618.firebaseio.com'
})

const db = admin.firestore()
export { admin, db }
