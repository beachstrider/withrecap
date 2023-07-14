import * as functions from 'firebase-functions'

import { User } from '@recap/shared'

import { db, mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { debug } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

interface Payload {
  // We expect to receive a list of emails separated by commas
  emails: string
}

export const SendInviteEmails = functions.https.onCall(
  SentryWrapper<[Payload, functions.https.CallableContext]>(
    'SendInviteEmails',
    'functions.https.onCall',
    async ({ emails }, context) => {
      if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
      }

      debug('SendinInviteEmails started')

      const mail = new MailService(mailgun, settings.domain)

      const doc = await db.collection('users').doc(context.auth.uid).get()
      if (!doc.exists) {
        throw new functions.https.HttpsError('not-found', 'User information cannot be found')
      }
      const user = doc.data() as User

      await mail.send(Templates.Invite, {
        email: emails,
        inviterName: user.displayName || user.email,
        appUrl: settings.baseURL,
        storeUrl: settings.storeURL
      })

      return { msg: 'ok' }
    }
  )
)
