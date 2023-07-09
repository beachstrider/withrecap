import chalk from 'chalk'
import * as admin from 'firebase-admin'

import { Addons, Meeting, deleteCollection } from '@recap/shared'

import addonsJSON from './data/addons.json'
import meetingsJSON from './data/meetings.json'

const app = admin.initializeApp({
  credential: admin.credential.cert('../../service-account.json')
})
const db = app.firestore()

const reset = async () => {
  await deleteCollection(db, 'addons')
  await deleteCollection(db, 'meetings')
  await deleteCollection(db, 'users')
}

const seed = async () => {
  const addons: Addons = addonsJSON
  const meetings: { [mid: string]: Meeting } = meetingsJSON

  // Add addons
  for await (const id of Object.keys(addons)) {
    const addon = addons[id]
    await db.collection('addons').doc(id).set(addon)
  }

  // Add meeting
  for await (const mid of Object.keys(meetings)) {
    const meeting = meetings[mid]
    await db.collection('meetings').doc(mid).set(meeting)
  }
}

const main = async () => {
  console.log('Seeding initial data...')
  await reset()
  await seed()
  console.log(chalk.green('Seeding completed successfully.'))
}

main()
