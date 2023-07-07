import { db } from '../../config'
import { SentryWrapper } from '../../utils/sentry'
import { Meeting, Recording } from '@recap/shared'
import { FieldValue } from 'firebase-admin/firestore'
import * as functions from 'firebase-functions'

type Data = {
  recorder?: string | FieldValue
  recorders?: string[] | FieldValue
}

export const UpdateRecording = functions.https.onCall(
  SentryWrapper('UpdateRecording', 'functions.https.onCall', async ({ meetingId, action }: Recording, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function')
    }

    const email = context.auth.token.email!

    functions.logger.debug(`UpdateRecording started as ${email} ${action}`)

    const doc = db.collection('meetings').doc(meetingId)
    const snapshot = await doc.get()
    const meeting = snapshot.data() as Meeting

    // If user is not an attendee of the meeting
    if (!meeting.emails.includes(email)) {
      throw new functions.https.HttpsError('permission-denied', 'The user is not in attendee list.')
    }

    let data: Data = {}

    switch (action) {
      case 'join':
        // Set this email as a recorder if no one is recording
        if (!meeting.recorder) {
          data.recorder = email
        }

        // If the meeting is being held
        if (Array.isArray(meeting.recorders)) {
          // Put this email to recorders only if it is not in yet
          if (!meeting.recorders.includes(email)) {
            data.recorders = [...meeting.recorders, email]
          }
        }
        // If no such the meeting or the meeting is already ended
        else {
          data.recorders = [email]
        }

        break

      case 'leave':
        // Remove this email in recorders array
        if (Array.isArray(meeting.recorders)) {
          if (meeting.recorders.length > 1) {
            data.recorders = meeting.recorders.filter((recorder) => recorder !== email)
          }
          // NOTE: length === 1 means the remaining recorder is this email
          //       if the remaining recorder is still not this email,
          //       this is an exception case like while recorders is not yet updated
          else {
            data.recorders = FieldValue.delete()
          }
        }

        // If the email has been a recorder, delete it
        if (meeting.recorder === email) {
          data.recorder = FieldValue.delete()
        }

        break

      case 'delegated':
        data.recorder = email

        break

      default:
        break
    }

    if (typeof data.recorder !== 'undefined' || typeof data.recorders !== 'undefined') {
      await doc.update(data)

      functions.logger.debug(`UpdateRecording done, recorder is ${data.recorder}, recorders is `, data.recorders)
    } else {
      functions.logger.debug('UpdateRecording skipped')
    }

    return { msg: 'ok' }
  })
)
