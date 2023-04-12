import * as bodyParser from 'body-parser'
import * as functions from 'firebase-functions'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

import { addEntry } from './services/entries'
import { ValidateFirebaseIdToken } from './services/auth/middleware'

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(ValidateFirebaseIdToken)

functions.logger.debug('app is about to start, middleware are loaded ')

app.get('/', (_req, res) => res.status(200).send('Hey there!'))
app.post('/meetings/:id/entries', addEntry)

exports.app = functions.https.onRequest(app)
