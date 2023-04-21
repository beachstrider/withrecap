import { LoadingIcon, Meeting, useAuthGuard } from '@recap/shared'
import React, { useEffect, useState } from 'react'

import { ExtensionMessages } from '../../../common/models'
import { MeetingDetails } from '../components/MeetingDetails'
import { RecentMeeting } from '../components/RecentMeeting'
import { Sharing } from '../components/Sharing'

const Popup = () => {
  const { user } = useAuthGuard()

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

  const displayMeetingDetails = () => {
    if (meeting) {
      return (
        <>
          <MeetingDetails meeting={meeting} ended={false} />
          <Sharing meeting={meeting} />
        </>
      )
    } else {
      return (
        <div>
          {/** TODO: This should be improved */}
          <p>Cannot record this meeting as it's not part of your calendar</p>
        </div>
      )
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <LoadingIcon />
      </div>
    )
  }

  return <>{!meeting ? <RecentMeeting uid={user.uid} /> : displayMeetingDetails()}</>
}

export default Popup
