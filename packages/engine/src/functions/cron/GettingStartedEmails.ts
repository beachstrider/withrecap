import * as functions from 'firebase-functions'
import { addDays } from 'date-fns'
import { User } from '@recap/shared'

import { mail as mailgun, settings, db } from '../../config'
import { MailService, Templates } from '../../services/mail'

export const GettingStartedEmails = functions.pubsub.schedule('every day 08:00').onRun(async (_context) => {
  try {
    functions.logger.debug('preparing to send getting started emails')

    const mail = new MailService(mailgun, settings.domain)

    functions.logger.debug('fetching users to send emails to...')

    const now = new Date()
    const documents = await db
      .collection('users')
      .where('created', '>', addDays(now, -1))
      .where('created', '<=', now)
      .get()

    const users: User[] = []
    documents.forEach((doc) => {
      users.push(doc.data() as User)
    })

    functions.logger.debug('users fetched successfully')

    for (const user of users) {
      functions.logger.debug('sending email to:', user.email)

      await mail.send(Templates.GettingStarted, { email: user.email })

      functions.logger.debug('email sent')
    }
  } catch (err) {
    functions.logger.error('An error occurred while running sending getting started emails', err)
  }
})
