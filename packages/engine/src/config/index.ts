import * as functions from 'firebase-functions'
import { Configuration, OpenAIApi } from 'openai'
import formData from 'form-data'
import Mailgun from 'mailgun.js'
import { google } from 'googleapis'

const settings = {
  privateKey: functions.config().private.key.replace(/\\n/gm, '\n'),
  projectId: functions.config().project.id,
  clientEmail: functions.config().client.email,
  domain: functions.config().config.domain,
  baseURL: `https://${functions.config().config.domain}`
}

const auth = new google.auth.JWT({
  email: settings.clientEmail,
  key: settings.privateKey,
  scopes: ['https://www.googleapis.com/auth/datastore', 'https://www.googleapis.com/auth/cloud-platform']
})

const db = google.firestore({
  version: 'v1beta2',
  auth: auth
})

const configuration = new Configuration({
  apiKey: functions.config().config.chatgptapikey
})
const openai = new OpenAIApi(configuration)

const mailgun = new Mailgun(formData)
const mail = mailgun.client({ username: 'api', key: functions.config().config.mailgunapikey })

export { auth, db, openai, mail, settings }
