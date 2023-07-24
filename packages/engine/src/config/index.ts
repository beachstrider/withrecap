import * as Sentry from '@sentry/node'
import * as admin from 'firebase-admin'
import { config, logger } from 'firebase-functions'
import formData from 'form-data'
import { google } from 'googleapis'
import Mailgun from 'mailgun.js'
import { Configuration, OpenAIApi } from 'openai'

const settings = {
  projectId: config().project.id,
  domain: config().config.domain,
  baseURL: `https://${config().config.domain}`,
  storeURL: config().config.chromewebstorelink
}

const app = admin.initializeApp()

const db = app.firestore()

const rtdb = app.database()

const auth = app.auth()

const googleAuth = new google.auth.JWT({
  keyFile: '../../service-account.json',
  scopes: ['https://www.googleapis.com/auth/datastore', 'https://www.googleapis.com/auth/cloud-platform']
})

const firestore = google.firestore({
  version: 'v1beta2',
  auth: googleAuth
})

const configuration = new Configuration({
  apiKey: config().config.chatgptapikey
})

const openai = new OpenAIApi(configuration)

const mailgun = new Mailgun(formData)
const mail = mailgun.client({ username: 'api', key: config().config.mailgunapikey })

const initSentry = () => {
  try {
    Sentry.init({
      dsn: config().config.sentrydsn,
      release: process.env.npm_package_version,
      tracesSampleRate: 1.0
    })

    Sentry.configureScope((scope) => {
      scope.setTag('app', 'engine')
    })
  } catch (err) {
    logger.error('An error occurred while configuring Sentry', err)
  }
}

export { auth, db, firestore, googleAuth, initSentry, mail, openai, rtdb, settings }
