import React from 'react'

import { Meeting } from '@recap/shared'

import Highlights from './Highlights'
import Processing from './Processing'
import Summary from './Summary'
import Todos from './Todos'
import Transcript from './Transcript'

export default function MeetingContent({ meeting }: { meeting: Meeting }) {
  // Meeting is ended
  if (meeting.ended) {
    if (meeting.processed) {
      // Meeting is processed
      if (meeting.conversation.length > 0) {
        return (
          <div className="grow">
            <Summary meeting={meeting} />
            <Todos meeting={meeting} />
            <Highlights meeting={meeting} />
            <Transcript meeting={meeting} />
          </div>
        )
      } else {
        // Meeting has no conversation
        return <div className="grow">This meeting has no conversation.</div>
      }
    } else {
      return <Processing meeting={meeting} />
    }
  }

  // Meeting is being recorded
  return <Processing meeting={meeting} />
}
