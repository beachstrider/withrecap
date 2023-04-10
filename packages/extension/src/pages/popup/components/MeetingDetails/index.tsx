import React from 'react'
import { GoogleCalendarEvent } from '@recap/shared'

interface MeetingDetailsProps {
  meeting: GoogleCalendarEvent
  ended: boolean
}

// TODO: Use library of utils to display dates and times properly
/**
 * Smart component that displays meeting information of the most recent meeting or the one that is being recorded
 */
export const MeetingDetails = ({ meeting, ended }: MeetingDetailsProps) => {
  const Header = () => {
    const meetingEndDate = new Date(meeting.end!.dateTime!)
    const now = new Date()

    if (ended) {
      return <p>Last meeting</p>
    } else {
      return <p>Taking notes • {Math.round((meetingEndDate.getTime() - now.getTime()) / 1000 / 60)} minutes left...</p>
    }
  }

  const Summary = () => {
    return <p>{meeting.summary}</p>
  }

  const Participants = () => {
    // Includes the meeting creator
    const nbAttendees = (meeting.attendees?.length || 0) + 1

    return <span>{nbAttendees} Participants</span>
  }

  const Time = () => {
    return (
      <span>
        {meeting.start?.dateTime} - {meeting.end?.dateTime}
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
