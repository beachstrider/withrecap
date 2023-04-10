import React, { useEffect, useMemo, useState } from 'react'
import { GoogleCalendarEvent, MeetingStore, UserMeetingStore } from '@recap/shared'
import { MeetingDetails } from '../MeetingDetails'

export type SummaryProps = {
  uid: string
}

const Summary = (props: SummaryProps) => {
  const userMeetingStore = useMemo(() => new UserMeetingStore(props.uid), [props.uid])
  const meetingStore = useMemo(() => new MeetingStore(), [])

  const [recentMeetingDetails, setRecentMeetingDetails] = useState<GoogleCalendarEvent | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    userMeetingStore
      .recent()
      .then((recentMeetingId) => {
        if (!recentMeetingId) {
          return
        }

        meetingStore
          .get(recentMeetingId)
          .then((m) => {
            setRecentMeetingDetails({ ...m, mid: recentMeetingId })
          })
          .finally(() => setLoading(false))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [userMeetingStore, meetingStore])

  const displayRecentMeeting = () => {
    if (recentMeetingDetails) {
      return (
        <div>
          <MeetingDetails meeting={recentMeetingDetails} ended />
        </div>
      )
    } else {
      return (
        <div>
          <p>No recent meeting</p>
        </div>
      )
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>{displayRecentMeeting()}</div>
    </div>
  )
}

export default Summary
