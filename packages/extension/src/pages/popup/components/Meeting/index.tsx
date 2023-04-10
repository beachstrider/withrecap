import React from 'react'
import { GoogleCalendarEvent } from '@recap/shared'
import { MeetingDetails } from '../MeetingDetails'

export type MeetingProps = {
  meeting: GoogleCalendarEvent
}

const Meeting = (props: MeetingProps) => {
  const displayMeetingDetails = () => {
    if (props.meeting) {
      return (
        <>
          <MeetingDetails meeting={props.meeting} ended={false} />
        </>
      )
    } else {
      return (
        <div>
          <p>cannot record this meeting as it's not part of your calendar</p>
        </div>
      )
    }
  }

  return (
    <div>
      <div>{displayMeetingDetails()}</div>
    </div>
  )
}

export default Meeting
