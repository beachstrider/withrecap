import * as functions from 'firebase-functions'

export const SendInviteEmails = functions.https.onCall(async ({ emails }, context) => {
  try {
    functions.logger.debug('sending invites started', emails, context)

    return { msg: 'ok' }
  } catch (err) {
    functions.logger.error('An error occurred while running user created', err)
  }
})
