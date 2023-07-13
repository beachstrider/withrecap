import * as functions from 'firebase-functions'

import { auth } from '../../config'
import { log } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

export const CreateAuthToken = functions.https.onCall(
  SentryWrapper('CreateAuthToken', 'functions.https.onCall', async (_, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
    }

    log('CreateAuthToken started')

    try {
      const token = await auth.createCustomToken(context.auth.uid)

      return { token }
    } catch (error) {
      throw new functions.https.HttpsError('internal', 'createCustomToken failed')
    }
  })
)
