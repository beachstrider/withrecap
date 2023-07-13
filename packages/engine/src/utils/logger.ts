import * as dotenv from 'dotenv'
import * as functions from 'firebase-functions'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '../../../../.env')
})

export const log = (...args: any[]) => {
  if (process.env.USE_FIREBASE_EMULATORS === 'true') {
    console.debug(...args)
  } else {
    functions.logger.debug(...args)
  }
}
