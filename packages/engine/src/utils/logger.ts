import * as functions from 'firebase-functions'

export const log = (...args: any[]) => {
  if (process.env.USE_FIREBASE_EMULATORS) {
    console.debug(...args)
  } else {
    functions.logger.debug(...args)
  }
}
