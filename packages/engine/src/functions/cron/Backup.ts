import * as functions from 'firebase-functions'

import { auth, firestore, settings } from '../../config'

export const BackupFirestore = functions.pubsub.schedule('every day 00:00').onRun(async (_context) => {
  try {
    const timestamp = new Date().toISOString()

    console.debug(`start firestore backup for project ${settings.projectId}`)

    await auth.authorize()

    return firestore.projects.databases.exportDocuments({
      name: `projects/${settings.projectId}/databases/(default)`,
      requestBody: {
        outputUriPrefix: `gs://${settings.projectId}-firestore-backups/backups/${timestamp}`
      }
    })
  } catch (err) {
    functions.logger.error('An error occurred while running firestore backup', err)
  }
})
