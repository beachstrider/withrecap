import * as functions from 'firebase-functions'

export const SendInviteEmails = functions.https.onCall(async (data, context) => {
  try {
    functions.logger.debug('sending invites started', data, context)

    return { msg: 'ok' }
  } catch (err) {
    functions.logger.error('An error occurred while running user created', err)
  }
})
