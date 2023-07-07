import { firestore, googleAuth, settings } from '../../config'
import { SentryWrapper } from '../../utils/sentry'
import * as functions from 'firebase-functions'

export const BackupFirestore = functions.pubsub.schedule('every day 00:00').onRun(
  SentryWrapper<[functions.EventContext]>('BackupFirestore', 'functions.pubsub.schedule.onRun', async (_context) => {
    const timestamp = new Date().toISOString()

    console.debug(`start firestore backup for project ${settings.projectId}`)

    await googleAuth.authorize()

    return firestore.projects.databases.exportDocuments({
      name: `projects/${settings.projectId}/databases/(default)`,
      requestBody: {
        outputUriPrefix: `gs://${settings.projectId}-firestore-backups/backups/${timestamp}`
      }
    })
  })
)
