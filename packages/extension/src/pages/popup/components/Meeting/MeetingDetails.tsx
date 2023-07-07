import React from 'react'

import { formatDistance, isFuture } from 'date-fns'

import { Meeting, PROTOCAL, getTime } from '@recap/shared'

interface MeetingDetailsProps {
  meeting: Meeting
  ended: boolean
}

const getTimeLeft = (t: string) => {
  const now = new Date()
  const time = new Date(t)

  if (isFuture(time)) {
    return formatDistance(time, now)
  }

  return '0 minute'
}

/**
 * Smart component that displays meeting information of the most recent meeting or the one that is being recorded
 */
export const MeetingDetails = ({ meeting, ended }: MeetingDetailsProps) => {
  const Header = () => {
    if (ended) {
      return <p className="font-semibold text-gray-500 mb-[10px]">Last meeting</p>
    } else {
      return <p className="font-semibold text-gray-500 mb-[10px]">Taking notes • {getTimeLeft(meeting.end)} left...</p>
    }
  }

  const Summary = () => {
    return <h6 className="mb-[4px] capitalize">🌞 {meeting.title}</h6>
  }

  const Participants = () => {
    return <span>{meeting.emails.length} Participants</span>
  }

  const Time = () => {
    const startTime = getTime(meeting.start)
    const endTime = getTime(meeting.end)

    return (
      <span>
        {startTime} - {endTime}
      </span>
    )
  }

  const Body = () => (
    <p className="text-gray-500 mb-[14px]">
      <Time /> • <Participants />
    </p>
  )

  const Footer = () => {
    if (ended) {
      const openRecapApp = async () => {
        return chrome.tabs.create({ url: `${PROTOCAL}://${process.env.DOMAIN}/app/meetings/${meeting.mid}` })
      }

      return (
        <button className="w-full py-[6px] text-[15px] bg-gray-950 text-white rounded-[12px]" onClick={openRecapApp}>
          See notes
        </button>
      )
    }

    return null
  }

  return (
    <div className="bg-gray-100 p-[16px] rounded-[16px]">
      <Header />
      <Summary />
      <Body />
      <Footer />
    </div>
  )
}
