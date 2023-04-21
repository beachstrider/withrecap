import React from 'react'

import { Meeting } from '@recap/shared'
import { Sharing } from '../Sharing'
import { MeetingDetails } from './MeetingDetails'

interface Props {
  meeting: Meeting
}

export const ActiveMeeting = ({ meeting }: Props) => {
  if (meeting) {
    return (
      <div className="py-[24px]">
        <MeetingDetails meeting={meeting} ended={false} />
        <Sharing meeting={meeting} />
      </div>
    )
  } else {
    return <p className="py-[24px]">Cannot record this meeting as it's not part of your calendar</p>
  }
}

export default ActiveMeeting
