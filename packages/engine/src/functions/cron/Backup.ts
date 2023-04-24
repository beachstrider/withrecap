import * as functions from 'firebase-functions'

import { auth, db, settings } from '../../config'

export const BackupFirestore = functions.pubsub.schedule('every day 00:00').onRun(async (_context) => {
  const timestamp = new Date().toISOString()

  console.debug(`start firestore backup for project ${settings.projectId}`)

  await auth.authorize()

  return db.projects.databases.exportDocuments({
    name: `projects/${settings.projectId}/databases/(default)`,
    requestBody: {
      outputUriPrefix: `gs://${settings.projectId}-firestore-backups/backups/${timestamp}`
    }
  })
})
