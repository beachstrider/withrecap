import React from 'react'
import { Link } from 'react-router-dom'

import { getTimeRange, Meeting, MeetingAttendee, MeetingMetadata } from '@recap/shared'

import { MEETINGS } from '../../../constants/routes'
import UserAvatar from '../../display/UserAvatar'

import arrowLeft from '../../../assets/img/arrowLeft.svg'
import purpleMessage from '../../../assets/img/purpleMessage.svg'

interface Props {
  meeting: Meeting
}

export default function Info({ meeting }: Props) {
  const formatDescription = (description: string) => {
    const maxChars = 75

    if (description.length <= maxChars) {
      return description
    } else {
      return `${description.substring(0, maxChars).trim()}...`
    }
  }

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
        <div className="font-semibold text-purple-700">{meeting.emails.length > 2 ? 'Conference' : '1:1'}</div>
      </div>
      <h5 className="font-semibold mb-[12px]">{meeting.title}</h5>
      <p className="font-semibold text-gray-500 mb-[24px]">{getTimeRange(meeting.start, meeting.end)}</p>

      <p>{formatDescription(meeting.description || '')}</p>
      <div className="my-[28px] h-[2px] bg-[#F1F3F5]"></div>
      <div className="font-semibold mb-[6px]">
        Participants&nbsp;&nbsp;<span className="text-gray-500">{meeting.emails.length}</span>
      </div>
      {meeting.metadata && <Metadata metadata={meeting.metadata} attendees={Object.values(meeting.attendees)} />}
    </div>
  )
}

const Metadata: React.FC<{ metadata: MeetingMetadata; attendees: MeetingAttendee[] }> = ({ metadata, attendees }) => {
  const getAvatar = (speaker: string): string | undefined => {
    return attendees.find((a) => a.name === speaker)?.avatar
  }

  const formatPercentage = (percentage: number): string => {
    return (percentage * 100).toFixed(0)
  }

  return (
    <>
      <p className="text-gray-500 mb-[24px]">Ranked in order of speaker.</p>
      <div className="flex flex-col gap-[16px]">
        {Object.entries(metadata.percentage).map(([speaker, percentage], key) => {
          return (
            <div key={key} className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <UserAvatar
                  avatar={getAvatar(speaker)}
                  name={speaker}
                  className="sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]"
                />
                <div className="font-semibold sm:max-w-[200px] truncate">{speaker}</div>
              </div>
              <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                {formatPercentage(percentage)}%
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
