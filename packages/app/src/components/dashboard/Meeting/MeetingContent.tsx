import React from 'react'

import { Meeting } from '@recap/shared'

import Highlights from './Highlights'
import Processing from './Processing'
import Summary from './Summary'
import Todos from './Todos'
import Transcript from './Transcript'

export default function MeetingContent({ meeting }: { meeting: Meeting }) {
  if (meeting.ended) {
    if (meeting.transcript?.length) {
      // Meeting was processed and has a conversation
      return (
        <div className="grow">
          <Summary meeting={meeting} />
          <Todos meeting={meeting} />
          <Highlights meeting={meeting} />
          <Transcript meeting={meeting} />
        </div>
      )
    } else {
      if (meeting.conversation.length > 0) {
        // Meeting is being processed
        return <Processing meeting={meeting} />
      } else {
        // Meeting has no conversation
        return <div className="grow">This meeting has no conversation.</div>
      }
    }
  }

  // Meeting is being recorded
  return <Processing meeting={meeting} />
}
