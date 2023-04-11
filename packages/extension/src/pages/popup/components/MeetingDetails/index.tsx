import React from 'react'
import { formatDistance, format } from 'date-fns'
import { Meeting } from '@recap/shared'

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
      return <p>Last meeting</p>
    } else {
      return <p>Taking notes • {formatDistance(meetingEndDate, now)} left...</p>
    }
  }

  const Summary = () => {
    return <p>{meeting.summary}</p>
  }

  const Participants = () => {
    // Includes the meeting creator
    const nbAttendees = meeting.attendees.length + 1

    return <span>{nbAttendees} Participants</span>
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

  const Footer = () => {
    if (ended) {
      const openRecapApp = async () => {
        return chrome.tabs.create({ url: `${process.env.RECAP_APP_BASE_URL}/meetings/${meeting.mid}` })
      }

      return <button onClick={openRecapApp}>See notes</button>
    }

    return null
  }

  return (
    <div>
      <Header />
      <Summary />
      <p>
        <Time /> • <Participants />
      </p>
      <Footer />
    </div>
  )
}
