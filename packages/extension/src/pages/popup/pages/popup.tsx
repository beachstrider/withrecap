import React, { useEffect, useState } from 'react'
import { GoogleCalendarEvent, useAuth } from '@recap/shared'

import Summary from '../components/Summary'
import Meeting from '../components/Meeting'
import { ExtensionMessages } from '../../../common/models'

const Popup = () => {
  const { user } = useAuth()

  const [meeting, setMeeting] = useState<GoogleCalendarEvent | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    chrome.runtime
      .sendMessage<any, { recording: boolean; meetingDetails?: GoogleCalendarEvent }>({
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

  return <div>{!meeting ? <Summary uid={user.uid} /> : <Meeting meeting={meeting} />}</div>
}

export default Popup
