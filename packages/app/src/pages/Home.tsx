import React from 'react'

import { useAuth } from '../auth/AuthProvider'
import MeetingSavings from '../components/dashboard/MeetingSavings'
import Meetings from '../components/dashboard/Meetings'
import Layout from '../components/layouts'

export default function Index() {
  const { user } = useAuth()

  console.log(user)

  return (
    <Layout>
      <div className="container xl:max-w-[1200px] sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
          <img src={`${user?.photoURL}`} alt="" className="w-[64px] h-[64px] rounded-full" />
          <div className="">
            <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">
              Afternoon, {user?.providerData[0]?.displayName?.split(' ')[0]}!
            </div>
            <MeetingSavings />
          </div>
        </div>
        <div className="flex flex-col sm:gap-[52px] gap-[40px]">
          <Meetings />
        </div>
      </div>
    </Layout>
  )
}
