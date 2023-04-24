import { Meeting } from '@recap/shared'
import { format, formatDistance } from 'date-fns'
import React from 'react'

interface MeetingDetailsProps {
  meeting: Meeting
  ended: boolean
}

/**
 * Smart component that displays meeting information of the most recent meeting or the one that is being recorded
 */
export const MeetingDetails = ({ meeting, ended }: MeetingDetailsProps) => {
  const Header = () => {
    const meetingEndDate = new Date(meeting.end)
    const now = new Date()

    if (ended) {
      return <p className="font-semibold text-gray-500 mb-[10px]">Last meeting</p>
    } else {
      return (
        <p className="font-semibold text-gray-500 mb-[10px]">
          Taking notes • {formatDistance(meetingEndDate, now)} left...
        </p>
      )
    }
  }

  const Summary = () => {
    return <h6 className="mb-[4px] capitalize">🌞 {meeting.title}</h6>
  }

  const Participants = () => {
    return <span>{meeting.emails.length} Participants</span>
  }

  const Time = () => {
    const startTime = format(new Date(meeting.start), 'h:mm a')
    const endTime = format(new Date(meeting.end), 'h:mm a')

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
        return chrome.tabs.create({ url: `${process.env.RECAP_APP_BASE_URL}/app/meetings/${meeting.mid}` })
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
