import * as dotenv from 'dotenv'
import * as functions from 'firebase-functions'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '../../../../.env')
})

export const debug = (...args: any[]) => {
  if (process.env.USE_FIREBASE_EMULATORS === 'true') {
    console.debug(...args)
  } else {
    functions.logger.debug(...args)
  }
}

export const warn = (...args: any[]) => {
  if (process.env.USE_FIREBASE_EMULATORS === 'true') {
    console.warn(...args)
  } else {
    warn(...args)
  }
}

export const error = (...args: any[]) => {
  if (process.env.USE_FIREBASE_EMULATORS === 'true') {
    console.error(...args)
  } else {
    error(...args)
  }
}
