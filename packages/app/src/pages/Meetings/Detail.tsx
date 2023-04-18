import React from 'react'

import Layout from '../../components/layouts'

import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/img/arrowLeft.svg'
import jessica from '../../assets/img/josh.png'
import lindsey from '../../assets/img/lindsey.png'
import listInCircle from '../../assets/img/listInCircle.svg'
import maxwell from '../../assets/img/matt.png'
import purpleMessage from '../../assets/img/purpleMessage.svg'
import { MEETINGS } from '../../constants/routes'

export default function MeetingDetail() {
  return (
    <Layout>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="container-sm sm:flex items-start gap-[80px]">
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
                  <img src={maxwell} alt="" className="w-[32px] h-[32px]" />
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
            <div className="flex justify-between mb-[34px]">
              <div className="flex gap-[12px]">
                <img src={listInCircle} alt="" />
                <div className="font-semibold">Summary</div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap gap-[34px] sm:mb-[82px] mb-[63px]">
              <div>
                <div className="font-semibold">Introduction</div>
                <div>
                  Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands out
                  from the competition, focusing on innovative features and user experience. The team agreed on the
                  importance of understanding the target audience and their needs to ensure the app's success.
                </div>
              </div>
              <div>
                <div className="font-semibold">Target Audience</div>
                <div>
                  Lindsey presented market research data, identifying the primary target audience as individuals aged
                  18-45, with a secondary audience of people above 45 years old. The team acknowledged the need to cater
                  to users with varying meditation experience, from beginners to advanced practitioners.
                </div>
              </div>
              <div>
                <div className="font-semibold">App Features</div>
                <div>
                  Jessica facilitated brainstorming on potential app features, with the team agreeing on the following
                  key features:
                  <br />
                  1. Customizable meditation plans: Users can create personalized plans based on their goals, experience
                  level, and available time.
                  <br />
                  2. Guided meditation sessions: A variety of guided sessions led by experienced instructors, with
                  options for different meditation styles and lengths.
                  <br />
                  3. Progressive learning: Content designed to help users gradually advance in their practice and
                  explore new techniques.
                  <br />
                  4. In-app community: A feature allowing users to connect with other meditators, share experiences, and
                  offer support.
                  <br />
                  5. Gamification: Incorporating elements like streaks, badges, and challenges to motivate users and
                  encourage daily practice.
                  <br />
                  6. Analytics and tracking: Users can monitor their progress, view statistics, and set personal
                  milestones.
                </div>
              </div>
              <div>
                <div className="font-semibold">Conclusion</div>
                <div>
                  The meeting concluded with the team expressing enthusiasm for the project and a shared commitment to
                  creating a unique and engaging meditation app.
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="flex gap-[12px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
