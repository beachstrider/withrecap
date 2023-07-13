import { addDays } from 'date-fns'
import * as functions from 'firebase-functions'

import { User } from '@recap/shared'

import { db, mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { log } from '../../utils/logger'

export const GettingStartedEmails = functions.pubsub.schedule('every day 08:00').onRun(async (_context) => {
  try {
    log('preparing to send getting started emails')

    const mail = new MailService(mailgun, settings.domain)

    log('fetching users to send emails to...')

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

    log('users fetched successfully')

    for (const user of users) {
      log('sending email to:', user.email)

      await mail.send(Templates.GettingStarted, { email: user.email, appUrl: settings.baseURL })

      log('email sent')
    }
  } catch (err) {
    functions.logger.error('An error occurred while running sending getting started emails', err)
  }
})
