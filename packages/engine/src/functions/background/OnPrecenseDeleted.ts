import * as functions from 'firebase-functions'

import { SentryWrapper } from '../../utils/sentry'

const options: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 120
}

export const DEFAULT_TIMEZONE = 'America/Montreal'

// export const OnPrecenseDeleted = functions
//   .runWith(options)
//   .database.ref('/precenses/{mid}/{email}')
//   .onDelete(
//     SentryWrapper<
//       [
//         functions.database.DataSnapshot,
//         functions.EventContext<{
//           mid: string
//           email: string
//         }>
//       ]
//     >('OnPrecenseDeleted', 'functions.database.ref.onDelete', async (change, context) => {
//       functions.logger.debug('OnPrecenseDeleted started:', context.params.mid, context.params.email)
//     })
//     )

export const OnPrecenseDeleted = functions
  .runWith(options)
  .database.ref('/presences/{mid}/{email}')
  .onDelete((snapshot, context) => {
    functions.logger.debug('OnPrecenseDeleted started:', context.params.mid, context.params.email)
  })
