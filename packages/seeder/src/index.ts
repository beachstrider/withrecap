import chalk from 'chalk'
import { exec } from 'child_process'
import * as dotenv from 'dotenv'
import * as admin from 'firebase-admin'
import path from 'path'
import { exit } from 'process'

import { Addons, Meeting } from '@recap/shared'

import addonsJSON from './data/addons.json'
import meetingsJSON from './data/meetings.json'

dotenv.config({
  path: path.join(__dirname, '../../../.env')
})

const useEmulators = process.env.USE_FIREBASE_EMULATORS

if (useEmulators === 'true') {
  process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
}

const clear = (callback: () => void) => {
  const credentials = `cross-env GOOGLE_APPLICATION_CREDENTIALS="../../service-account.json"`
  const deleteCollections = `firebase firestore:delete --all-collections --force`
  const project = `--project ${process.env.FIREBASE_PROJECT_ID}`

  const command = `${credentials} ${deleteCollections} ${project}`

  exec(command, (error, _, stderr) => {
    if (error || stderr) {
      console.error(chalk.red(`exec error: ${error}${stderr}`))
      return exit(1)
    }

    console.log('Firestore cleared.')
    callback()
  })
}

const seed = async () => {
  const app = admin.initializeApp({
    credential: admin.credential.cert('../../service-account.json')
  })

  const db = app.firestore()

  const addons: Addons = addonsJSON
  const meetings: {
    [mid: string]: Meeting
  } = meetingsJSON

  const batch = db.batch()

  // Add addons
  for (const id of Object.keys(addons)) {
    const addon = addons[id]
    const ref = db.collection('addons').doc(id)
    batch.set(ref, addon)
  }

  // Add meeting
  for (const mid of Object.keys(meetings)) {
    const meeting = meetings[mid]
    const ref = db.collection('meetings').doc(mid)
    batch.set(ref, meeting)
  }

  // Commit the batch
  await batch
    .commit()
    .then(() => {
      console.log(chalk.green('Seeding completed successfully.'))
    })
    .catch((error) => {
      console.error(chalk.red(`Batch commit failed: ${error}`))
      return exit(1)
    })

  // Shutdown the app
  app.delete().catch((error) => {
    console.error(chalk.red(`Failed to close app: ${error}`))
    return exit(1)
  })
}

const main = async () => {
  if (useEmulators === 'true') {
    seed()
  } else {
    clear(seed)
  }
}

main()
