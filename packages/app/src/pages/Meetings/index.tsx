import React, { useEffect } from 'react'

import { getUserFirstName, toast, useAuthGuard, useIntegrations, useMeetings } from '@recap/shared'

import { ExtensionInstallationAlert } from '../../components/blocks'
import Meetings from '../../components/dashboard/Meeting/List'
import MeetingTimeSaved from '../../components/dashboard/Meeting/MeetingTimeSaved'
import Layout from '../../components/layouts'

export default function Index() {
  const { user } = useAuthGuard()

  const { meetingsByDate, loading: loadingMeetings, error: meetingsError } = useMeetings()
  const { userAddons, loading: loadingAddons, error: addonsError } = useIntegrations()

  useEffect(() => {
    if (meetingsError) {
      toast.error(meetingsError.message, meetingsError.err)
    }

    if (addonsError) {
      toast.error(addonsError.message, addonsError.err)
    }
  }, [meetingsError, addonsError])

  return (
    <Layout isLoading={loadingMeetings || loadingAddons}>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        {!loadingAddons && Object.keys(userAddons).length === 0 && <ExtensionInstallationAlert />}
        <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
          <img src={user.photoURL} alt="" className="w-[64px] h-[64px] rounded-full" />
          <div className="">
            <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">Afternoon, {getUserFirstName(user)}</div>
            <MeetingTimeSaved />
          </div>
        </div>
        <div className="flex flex-col sm:gap-[52px] gap-[40px]">
          <Meetings meetingsByDate={meetingsByDate} />
        </div>
      </div>
    </Layout>
  )
}
