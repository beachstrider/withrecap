import React from 'react'

import { getUserFirstName, useAuthGuard } from '@recap/shared'

import { ExtensionInstallationAlert } from '../../components/blocks'
import Meetings from '../../components/dashboard/Meeting/List'
import MeetingTimeSaved from '../../components/dashboard/Meeting/MeetingTimeSaved'
import Layout from '../../components/layouts'
import { useIntegrations } from '../../hooks/integrations'
import { useMeetings } from '../../hooks/meetings'

export default function Index() {
  const { user } = useAuthGuard()
  const { meetingsByDate, loading: loadingMeetings } = useMeetings()
  const { userAddons, loading: loadingAddons } = useIntegrations()

  return (
    <Layout isLoading={loadingMeetings && loadingAddons}>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        {!Object.keys(userAddons).length && !loadingAddons && <ExtensionInstallationAlert />}
        <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
          <img src={`${user.photoURL}`} alt="" className="w-[64px] h-[64px] rounded-full" />
          <div className="">
            <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">
              Afternoon, {getUserFirstName(user)}!
            </div>
            <MeetingTimeSaved />
          </div>
        </div>
        <div className="flex flex-col sm:gap-[52px] gap-[40px]">
          {Object.keys(meetingsByDate).length > 0 && <Meetings meetingsByDate={meetingsByDate} />}
        </div>
      </div>
    </Layout>
  )
}
