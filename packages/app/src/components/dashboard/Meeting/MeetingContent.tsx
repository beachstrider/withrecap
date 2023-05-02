import React from 'react'

import { Meeting } from '@recap/shared'

import Processing from '../../../components/dashboard/Meeting/Processing'
import Summary from '../../../components/dashboard/Meeting/Summary'
import Transcript from '../../../components/dashboard/Meeting/Transcript'

export default function MeetingContent({ meeting }: { meeting: Meeting }) {
  if (meeting.ended) {
    if (meeting.transcript?.length) {
      // Meeting was processed and has a conversation
      return (
        <div className="grow">
          <Summary meetingDetails={meeting} />
          <Transcript meetingDetails={meeting} />
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
