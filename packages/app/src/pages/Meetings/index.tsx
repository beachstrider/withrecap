import React, { useEffect } from 'react'

import { browser, getUserFirstName, toast, useAuthGuard, useMeetings } from '@recap/shared'

import { ExtensionInstallationAlert, Welcome } from '../../components/blocks'
import InviteFriends from '../../components/dashboard/Meeting/InviteFriends'
import Meetings from '../../components/dashboard/Meeting/List'
import Layout from '../../components/layouts'

export default function Index() {
  const { user } = useAuthGuard()
  const { meetingsByDate, weekSaveHours, loading: loadingMeetings, error: meetingsError } = useMeetings()

  useEffect(() => {
    if (meetingsError) {
      toast.error(meetingsError.message, meetingsError.err)
    }
  }, [meetingsError])

  return (
    <Layout isLoading={loadingMeetings}>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[80px] py-[60px]">
        {/* If any recorded meeting list them, otherwise welcome block */}
        {Object.keys(meetingsByDate).length ? (
          <>
            {browser?.name !== 'chrome' && <ExtensionInstallationAlert />}
            <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
              <img src={user.photoURL} alt="" className="w-[64px] h-[64px] rounded-full" />
              <div className="">
                <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">
                  Afternoon, {getUserFirstName(user)}
                </div>
                <div className="flex sm:flex-row flex-col sm:items-center gap-[24px]">
                  {weekSaveHours > 0 ? `Recap saved you ${weekSaveHours} hours of meeting notes this week!` : ``}
                  <InviteFriends />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:gap-[52px] gap-[40px]">
              <Meetings meetingsByDate={meetingsByDate} />
            </div>
          </>
        ) : (
          <Welcome />
        )}
      </div>
    </Layout>
  )
}
