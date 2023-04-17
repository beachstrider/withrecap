import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { Configuration, OpenAIApi } from 'openai'

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: functions.config().private.key.replace(/\\n/gm, '\n'),
    projectId: functions.config().project.id,
    clientEmail: functions.config().client.email
  }),
  databaseURL: 'https://recap-381618.firebaseio.com'
})

const db = admin.firestore()

const configuration = new Configuration({
  apiKey: functions.config().config.chatgptapikey
})
const openai = new OpenAIApi(configuration)

export { admin, db, openai }
