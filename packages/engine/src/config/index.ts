import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { Configuration, OpenAIApi } from 'openai'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

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

const mailgun = new Mailgun(formData)
const mail = mailgun.client({ username: 'api', key: functions.config().config.mailgunapikey })

const DOMAIN = functions.config().config.domain
const BASE_URL = `https://${DOMAIN}`

export { admin, db, openai, mail, DOMAIN, BASE_URL }
