import * as functions from 'firebase-functions'

import { User } from '@recap/shared'

import { mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { log } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

export const OnUserCreated = functions.firestore.document('users/{userId}').onCreate(
  SentryWrapper<
    [
      functions.firestore.QueryDocumentSnapshot,
      functions.EventContext<{
        userId: string
      }>
    ]
  >('OnUserCreated', 'functions.firestore.document.onCreate', async (snapshot, context) => {
    log('OnUserCreated started for userId', context.params.userId)

    const mail = new MailService(mailgun, settings.domain)
    const user = snapshot.data() as User

    log('sending welcome email...')

    await mail.send(Templates.Welcome, { email: user.email, appUrl: settings.baseURL })

    log('welcome email sent with success')
  })
)
