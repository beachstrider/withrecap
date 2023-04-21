import { LoadingIcon, Meeting } from '@recap/shared'
import React, { useEffect, useState } from 'react'

import { ExtensionMessages } from '../../../common/models'
import ActiveMeeting from '../components/Meeting/ActiveMeeting'
import { RecentMeeting } from '../components/Meeting/RecentMeeting'

const Popup = () => {
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
    return (
      <div className="flex items-center justify-center flex-1">
        <LoadingIcon />
      </div>
    )
  }

  return <>{meeting ? <ActiveMeeting meeting={meeting} /> : <RecentMeeting />}</>
}

export default Popup
