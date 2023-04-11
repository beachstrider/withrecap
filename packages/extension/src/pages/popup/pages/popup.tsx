import React, { useEffect, useState } from 'react'
import { Meeting, useAuth } from '@recap/shared'

import { ExtensionMessages } from '../../../common/models'
import { MeetingDetails } from '../components/MeetingDetails'
import { RecentMeeting } from '../components/RecentMeeting'

const Popup = () => {
  const { user } = useAuth()

  const [meeting, setMeeting] = useState<Meeting | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    chrome.runtime
      .sendMessage<any, { recording: boolean; meetingDetails?: Meeting }>({
        type: ExtensionMessages.MeetingState
      })
      .then((response) => {
        setMeeting(response.meetingDetails)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  const displayMeetingDetails = () => {
    if (meeting) {
      return (
        <>
          <MeetingDetails meeting={meeting} ended={false} />
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

  return <div>{!meeting ? <RecentMeeting uid={user.uid} /> : displayMeetingDetails()}</div>
}

export default Popup
