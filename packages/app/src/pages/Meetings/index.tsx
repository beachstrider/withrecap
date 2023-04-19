import React from 'react'

import { useAuth } from '../../auth/AuthProvider'
import Meetings from '../../components/dashboard/Meeting/List'
import MeetingTimeSaved from '../../components/dashboard/Meeting/MeetingTimeSaved'
import Layout from '../../components/layouts'

export default function Index() {
  const { user } = useAuth()

  return (
    <Layout>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
          <img src={`${user.photoURL}`} alt="" className="w-[64px] h-[64px] rounded-full" />
          <div className="">
            <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">
              Afternoon, {user.displayName?.split(' ')[0]}!
            </div>
            <MeetingTimeSaved />
          </div>
        </div>
        <div className="flex flex-col sm:gap-[52px] gap-[40px]">
          <Meetings />
        </div>
      </div>
    </Layout>
  )
}
