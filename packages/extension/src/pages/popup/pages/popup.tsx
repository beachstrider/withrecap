import React, { useEffect, useState } from 'react'

import { captureException } from '@sentry/browser'

import { LoadingIcon, Meeting } from '@recap/shared'

import { ActiveMeeting } from '../components/Meeting/ActiveMeeting'
import { RecentMeeting } from '../components/Meeting/RecentMeeting'

import { ExtensionMessages } from '../../../common'

const Popup = () => {
  const [meeting, setMeeting] = useState<Meeting | undefined>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    chrome.runtime
      .sendMessage<any, { recording: boolean; meetingDetails?: Meeting }>({
        type: ExtensionMessages.MeetingState
      })
      .then((response) => {
        console.debug('background script sent response', response)

        setMeeting(response.meetingDetails)
      })
      .catch(captureException)
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
