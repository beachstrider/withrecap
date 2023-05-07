import * as functions from 'firebase-functions'
import { auth } from '../../config'
import { SentryWrapper } from '../../utils/sentry'

export const CreateAuthToken = functions.https.onCall(
  SentryWrapper<[any, functions.https.CallableContext]>(
    'CreateAuthToken',
    'functions.https.onCall',
    async (_, context) => {
      if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
      }
      try {
        const token = await auth.createCustomToken(context.auth.uid)
        return { token }
      } catch (error) {
        functions.logger.error(error)
        return { error }
      }
    }
  )
)
