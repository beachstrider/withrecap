import React from 'react'
import { Auth, useStore } from '../store'

import Layout from '../components/layouts'
import MeetingSavings from '../components/dashboard/MeetingSavings'
import Meetings from '../components/dashboard/Meetings'

export default function Index() {
  const { user } = useStore(Auth)

  return (
    <Layout>
      <div className="container xl:max-w-[1200px] sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
          <img src={user.image} alt="" className="w-[64px] h-[64px]" />
          <div className="">
            <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">Afternoon, {user.name}!</div>
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
