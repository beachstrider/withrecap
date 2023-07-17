// import dayjs from 'dayjs'
import * as functions from 'firebase-functions'

import { User, dayjs } from '@recap/shared'

import { db, mail as mailgun, settings } from '../../config'
import { MailService, Templates } from '../../services/mail'
import { debug, error } from '../../utils/logger'

export const GettingStartedEmails = functions.pubsub.schedule('every day 08:00').onRun(async (_context) => {
  try {
    debug('preparing to send getting started emails')

    const mail = new MailService(mailgun, settings.domain)

    debug('fetching users to send emails to...')

    const now = new Date()
    const documents = await db
      .collection('users')
      .where('created', '>', dayjs().subtract(1, 'day'))
      .where('created', '<=', now)
      .get()

    const users: User[] = []
    documents.forEach((doc) => {
      users.push(doc.data() as User)
    })

    debug('users fetched successfully')

    for (const user of users) {
      debug('sending email to:', user.email)

      await mail.send(Templates.GettingStarted, { email: user.email, appUrl: settings.baseURL })

      debug('email sent')
    }
  } catch (err) {
    error('An error occurred while running sending getting started emails', err)
  }
})
