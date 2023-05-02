import { User } from '@recap/shared'
import * as functions from 'firebase-functions'

import { mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { SentryWrapper } from '../../utils/sentry'

export const OnUserCreated = functions.firestore.document('users/{userId}').onCreate(
  SentryWrapper<[functions.firestore.QueryDocumentSnapshot, functions.EventContext]>(
    'OnUserCreated',
    'functions.firestore.document.onCreate',
    async (snapshot, _context) => {
      functions.logger.debug('new user signed up')

      const mail = new MailService(mailgun, settings.domain)
      const user = snapshot.data() as User

      functions.logger.debug('sending welcome email...')

      await mail.send(Templates.Welcome, { email: user.email, appUrl: settings.baseURL })

      functions.logger.debug('welcome email sent with success')
    }
  )
)
