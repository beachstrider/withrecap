import * as functions from 'firebase-functions'
import { SentryWrapper } from '../../utils/sentry'

export const UpdateRecording = functions.https.onCall(
  SentryWrapper('UpdateRecording', 'functions.https.onCall', async ({ recorder, recorders }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
    }

    functions.logger.debug('UpdateRecording started')

    try {
    } catch (error) {
      functions.logger.error(error)
      return { error }
    }
  })
)
