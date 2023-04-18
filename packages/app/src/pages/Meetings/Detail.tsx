import React from 'react'

import Layout from '../../components/layouts'

import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/img/arrowLeft.svg'
import jessica from '../../assets/img/josh.png'
import lindsey from '../../assets/img/lindsey.png'
import matt from '../../assets/img/matt.png'
import purpleMessage from '../../assets/img/purpleMessage.svg'

import Highlights from '../../components/dashboard/Meeting/Highlights'
import Summary from '../../components/dashboard/Meeting/Summary'
import Todos from '../../components/dashboard/Meeting/Todos'
import Transcript from '../../components/dashboard/Meeting/Transcript'
import { MEETINGS } from '../../constants/routes'

export default function MeetingDetail() {
  return (
    <Layout>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px]">
          <div className="card sm:max-w-[340px] w-full grow-0 sm:p-[24px] p-[18px]">
            <div className="flex gap-[6px] mb-[24px]">
              <img src={arrowLeft} alt="" />
              <Link to={MEETINGS}>
                <p className="font-semibold text-gray-500">Back</p>
              </Link>
            </div>
            <div className="flex gap-[12px] mb-[26px]">
              <img src={purpleMessage} alt="" />
              <div className="font-semibold text-purple-700">Conference</div>
            </div>
            <h5 className="font-semibold mb-[12px]">Meditation App Kickoff</h5>
            <p className="font-semibold text-gray-500 mb-[24px]">Tue, Mar 23&nbsp;&nbsp;9:00 AM - 10:30 AM</p>
            <p>A single to two lined description of what this meeting is about.</p>
            <div className="my-[28px] h-[2px] bg-[#F1F3F5]"></div>
            <div className="font-semibold mb-[6px]">
              Participants&nbsp;&nbsp;<span className="text-gray-500">3</span>
            </div>
            <p className="text-gray-500 mb-[24px]">Ranked in order of speaker.</p>
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[12px] items-center">
                  <img src={matt} alt="" className="w-[32px] h-[32px]" />
                  <div className="font-semibold">Maxwell</div>
                </div>
                <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                  50%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-[12px] items-center">
                  <img src={lindsey} alt="" className="w-[32px] h-[32px]" />
                  <div className="font-semibold">Lindsey</div>
                </div>
                <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                  28%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-[12px] items-center">
                  <img src={jessica} alt="" className="w-[32px] h-[32px]" />
                  <div className="font-semibold">Jessica</div>
                </div>
                <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                  22%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-[12px] items-center">
                  <div className="w-[32px] h-[32px] bg-gray-100 flex justify-center items-center font-semibold text-[12px] text-gray-400 rounded-full">
                    J
                  </div>
                  <div className="font-semibold">Justin</div>
                </div>
                <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                  0%
                </div>
              </div>
            </div>
          </div>
          <div className="grow">
            <Summary />
            <Todos />
            <Highlights />
            <Transcript />
          </div>
        </div>
      </div>
    </Layout>
  )
}
