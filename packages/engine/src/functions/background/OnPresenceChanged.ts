import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import * as functions from 'firebase-functions'

import { rtdb } from '../../config'
import { debug } from '../../utils/logger'
import { SentryWrapper } from '../../utils/sentry'

dayjs.extend(timezone)
dayjs.extend(utc)

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const OnPresenceChanged = functions
  .runWith(options)
  .database.ref('/presences/{mid}/{email}')
  .onWrite(
    SentryWrapper<
      [
        functions.Change<functions.database.DataSnapshot>,
        functions.EventContext<{
          mid: string
          email: string
        }>
      ]
    >('OnPresenceWrite', 'functions.database.ref.onWrite', async (snapshot, { params: { mid, email } }) => {
      debug('OnPresenceWrite started')

      const presencesSnapshot = rtdb.ref(`/presences/${mid}`)
      const presences = (await presencesSnapshot.once('value')).val()

      if (!presences) {
        return
      }

      const presenceEntries = Object.entries(presences)
      const recorderExists = presenceEntries.map(([_, presence]) => presence).includes(true)

      // Only if a meeting is not ended
      if (presenceEntries.length) {
        // Joining a meeting
        if (!recorderExists) {
          if (!snapshot.before.exists()) {
            await rtdb.ref(`/presences/${mid}`).update({ [email]: true })
            debug(`new joiner ${email} has been a recorder`)
          }
          // Leaving a meeting
          else if (!snapshot.after.exists()) {
            const [firstPresenceEmail] = presenceEntries[0]
            await rtdb.ref(`/presences/${mid}`).update({ [firstPresenceEmail]: true })
            debug(`recorder switched to ${firstPresenceEmail} as the previous one left`)
          }
        }
      }
    })
  )
