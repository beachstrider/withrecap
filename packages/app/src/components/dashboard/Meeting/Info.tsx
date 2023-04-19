import React from 'react'
import { Link } from 'react-router-dom'

import { Meeting, MeetingMetadata, getTimeRange } from '@recap/shared'

import { MEETINGS } from '../../../constants/routes'

import arrowLeft from '../../../assets/img/arrowLeft.svg'
import matt from '../../../assets/img/matt.png'
import purpleMessage from '../../../assets/img/purpleMessage.svg'

interface Props {
  meetingDetails: Meeting
}

export default function Info({ meetingDetails }: Props) {
  return (
    <div className="card sm:max-w-[340px] sm:min-w-[340px] w-full grow-0 sm:p-[24px] p-[18px]">
      <div className="flex">
        <Link to={MEETINGS}>
          <div className="flex gap-[6px] mb-[24px] justify-start">
            <img src={arrowLeft} alt="" />
            <p className="font-semibold text-gray-500">Back</p>
          </div>
        </Link>
      </div>
      <div className="flex gap-[12px] mb-[26px]">
        <img src={purpleMessage} alt="" />
        <div className="font-semibold text-purple-700">
          {/* If attendees are more than 2, then set type 'conference' */}
          {meetingDetails.attendees.length > 2 ? 'Conference' : '1:1'}
        </div>
      </div>
      <h5 className="font-semibold mb-[12px]">{meetingDetails.title}</h5>
      <p className="font-semibold text-gray-500 mb-[24px]">
        {/* Convert startTime, endTime of meeting to format EEE, MMM dd hh:mm aa - hh:mm aa */}
        {getTimeRange(meetingDetails.start, meetingDetails.end)}
      </p>

      <p>{meetingDetails.description}</p>
      <div className="my-[28px] h-[2px] bg-[#F1F3F5]"></div>
      <div className="font-semibold mb-[6px]">
        Participants&nbsp;&nbsp;<span className="text-gray-500">{meetingDetails.attendees.length}</span>
      </div>
      {meetingDetails.metadata && <Metadata metadata={meetingDetails.metadata} />}
    </div>
  )
}

const Metadata: React.FC<{ metadata: MeetingMetadata }> = ({ metadata }) => {
  return (
    <>
      <p className="text-gray-500 mb-[24px]">Ranked in order of speaker.</p>
      <div className="flex flex-col gap-[16px]">
        {Object.entries(metadata.percentage).map(([speaker, percentage], key) => {
          return (
            <div key={key} className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <img src={matt} alt="" className="w-[32px] h-[32px]" />
                <div className="font-semibold">{speaker}</div>
              </div>
              <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                {(percentage * 100).toFixed(0)}%
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
