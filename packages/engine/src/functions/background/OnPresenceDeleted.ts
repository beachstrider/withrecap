import * as functions from 'firebase-functions'

import { SentryWrapper } from '../../utils/sentry'

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const DEFAULT_TIMEZONE = 'America/Montreal'

export const OnPresenceDeleted = functions
  .runWith(options)
  .database.ref('/presences/{mid}/{email}')
  .onDelete(
    SentryWrapper<
      [
        functions.database.DataSnapshot,
        functions.EventContext<{
          mid: string
          email: string
        }>
      ]
    >('OnPresenceDeleted', 'functions.database.ref.onDelete', async (change, context) => {
      functions.logger.debug('OnPresenceDeleted started:', context.params.mid, context.params.email)
    })
  )
