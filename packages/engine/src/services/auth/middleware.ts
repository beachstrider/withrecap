import { Request, Response, NextFunction } from 'express'
import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
export const ValidateFirebaseIdToken = async (req: Request, res: Response, next: NextFunction) => {
  functions.logger.debug('Check if request is authorized with Firebase ID token')

  if (
    (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)
  ) {
    functions.logger.warn('No Firebase ID token was provided.')

    return res.status(403).send('Unauthorized')
  }

  let idToken: string
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    functions.logger.debug('Found "Authorization" header')
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else if (req.cookies) {
    functions.logger.debug('Found "__session" cookie')
    // Read the ID Token from cookie.
    idToken = req.cookies.__session
  } else {
    return res.status(403).send('Unauthorized')
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken)
    // TODO: Remove this
    functions.logger.debug('ID Token correctly decoded', decodedIdToken)
    req.user = decodedIdToken

    return next()
  } catch (error) {
    functions.logger.error('Error while verifying Firebase ID token:', error)

    return res.status(403).send('Unauthorized')
  }
}
