import chalk from 'chalk'
import * as admin from 'firebase-admin'

import { Addons, Meeting, deleteCollection } from '@recap/shared'

import addonsJSON from './data/addons.json'
import meetingJSON from './data/meeting.json'

const app = admin.initializeApp({
  credential: admin.credential.cert('../../service-account.json')
})
const db = app.firestore()

const reset = async () => {
  await deleteCollection(db, 'addons')
  await deleteCollection(db, 'meetings')
}

const seed = async () => {
  const addons: Addons = addonsJSON
  const meeting: Meeting = meetingJSON

  // Add addons
  await db.collection('addons')
  for await (const key of Object.keys(addons as Addons)) {
    const addon = addons[key]
    await db.collection('addons').add(addon)
  }

  // Add meeting
  await db.collection('meetings').add(meeting)
}

const main = async () => {
  console.log('Seeding initial data...')
  await reset()
  await seed()
  console.log(chalk.green('Seeding completed successfully.'))
}

main()
