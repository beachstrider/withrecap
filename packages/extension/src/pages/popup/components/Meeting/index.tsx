import React, { useEffect, useMemo, useState } from 'react'
import { GoogleCalendar, GoogleCalendarEvent } from '@recap/shared'
import { MeetingDetails } from '../MeetingDetails'

export type MeetingProps = {
  title: string
  accessToken: string
}

const Meeting = (props: MeetingProps) => {
  const googleCalendar = useMemo(() => new GoogleCalendar(props.accessToken), [props.accessToken])

  const [meetingDetails, setMeetingDetails] = useState<GoogleCalendarEvent | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    googleCalendar.getMeetingDetails(props.title).then((m) => {
      setMeetingDetails(m)
      setLoading(false)
    })
  }, [googleCalendar, props.title])

  const displayMeetingDetails = () => {
    if (meetingDetails) {
      return (
        <>
          <MeetingDetails meeting={meetingDetails} ended={false} />
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

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>{displayMeetingDetails()}</div>
    </div>
  )
}

export default Meeting
