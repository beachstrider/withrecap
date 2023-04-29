import { LoadingIcon, useRecentMeeting } from '@recap/shared'
import React from 'react'

import { InviteFriends } from '../InviteFriends'
import { Sharing } from '../Sharing'
import { MeetingDetails } from './MeetingDetails'
import { NoMeeting } from './NoMeeting'

export const RecentMeeting = () => {
  const { recentMeeting, loading } = useRecentMeeting()

  if (loading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <LoadingIcon />
      </div>
    )
  } else {
    if (recentMeeting) {
      return (
        <div className="py-[24px]">
          <MeetingDetails meeting={recentMeeting} ended />
          <Sharing meeting={recentMeeting} />
          <InviteFriends />
        </div>
      )
    } else {
      return <NoMeeting />
    }
  }
}
