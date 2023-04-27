import * as functions from 'firebase-functions'

import { db, mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { User } from '@recap/shared'

export const SendInviteEmails = functions.https.onCall(async ({ emails }, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
  }

  try {
    functions.logger.debug('sending invites started')

    const mail = new MailService(mailgun, settings.domain)

    const doc = await db.collection('users').doc(context.auth.uid).get()
    if (!doc.exists) {
      console.error(`Inviter (uid: ${context.auth.uid}) information cannot be found.`)
      return { error: 'User information cannot be found' }
    }
    const user = doc.data() as User

    await mail.send(Templates.Invite, {
      email: emails,
      inviterName: user.displayName || user.email,
      appUrl: settings.baseURL,
      storeUrl: settings.storeURL
    })

    return { msg: 'ok' }
  } catch (err) {
    functions.logger.error('An error occurred while running send invite emails', err)
  }
})
