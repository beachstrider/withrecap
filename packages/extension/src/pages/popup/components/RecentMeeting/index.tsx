import { LoadingIcon, Meeting, MeetingStore, UserMeetingStore } from '@recap/shared'
import React, { useEffect, useMemo, useState } from 'react'
import { AutomaticSharing } from '../AutomaticSharing'
import { InviteFriends } from '../InviteFriends'
import { MeetingDetails } from '../MeetingDetails'

export type RecentMeetingProps = {
  uid: string
}

export const RecentMeeting = (props: RecentMeetingProps) => {
  const userMeetingStore = useMemo(() => new UserMeetingStore(props.uid), [props.uid])
  const meetingStore = useMemo(() => new MeetingStore(), [])

  const [recentMeeting, setRecentMeeting] = useState<Meeting | undefined>()
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
          .then(setRecentMeeting)
          .finally(() => setLoading(false))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [userMeetingStore, meetingStore])

  const displayRecentMeeting = () => {
    if (recentMeeting) {
      return (
        <div className="py-[24px]">
          <MeetingDetails meeting={recentMeeting} ended />
        </div>
      )
    } else {
      return (
        <div className="py-[24px]">
          <p>No recent meeting</p>
        </div>
      )
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center flex-1">
        <LoadingIcon />
      </div>
    )

  return (
    <div>
      <div>{displayRecentMeeting()}</div>
      <AutomaticSharing uid={props.uid} />
      <hr />
      <InviteFriends />
    </div>
  )
}
