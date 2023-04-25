import { config } from 'firebase-functions'
import * as admin from 'firebase-admin'

import { Configuration, OpenAIApi } from 'openai'
import formData from 'form-data'
import Mailgun from 'mailgun.js'
import { google } from 'googleapis'

const settings = {
  projectId: config().project.id,
  domain: config().config.domain,
  baseURL: `https://${config().config.domain}`
}

const db = admin.initializeApp().firestore()

const auth = new google.auth.JWT({
  email: config().client.email,
  key: config().private.key.replace(/\\n/gm, '\n'),
  scopes: ['https://www.googleapis.com/auth/datastore', 'https://www.googleapis.com/auth/cloud-platform']
})

const firestore = google.firestore({
  version: 'v1beta2',
  auth: auth
})

const configuration = new Configuration({
  apiKey: config().config.chatgptapikey
})
const openai = new OpenAIApi(configuration)

const mailgun = new Mailgun(formData)
const mail = mailgun.client({ username: 'api', key: config().config.mailgunapikey })

export { auth, firestore, db, openai, mail, settings }
