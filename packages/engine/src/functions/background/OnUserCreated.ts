import { User } from '@recap/shared'
import * as functions from 'firebase-functions'

import { mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'

export const OnUserCreated = functions.firestore.document('users/{userId}').onCreate(async (snapshot, context) => {
  try {
    functions.logger.debug('new user signed up')

    const mail = new MailService(mailgun, settings.domain)
    const user = snapshot.data() as User

    functions.logger.debug('sending welcome email...')

    await mail.send(Templates.Welcome, { email: user.email, appUrl: settings.baseURL })

    functions.logger.debug('welcome email sent with success')
  } catch (err) {
    functions.logger.error('An error occurred while running user created', err)
  }
})
