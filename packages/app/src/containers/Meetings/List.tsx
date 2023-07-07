import exitArrow from '../../assets/img/exit-arrow-right.svg'
import purpleMessage from '../../assets/img/purpleMessage.svg'
import UserAvatar from '../../components/display/UserAvatar'
import { MEETINGS } from '../../constants/routes'
import { getFormattedDate, getTime, Meeting, MeetingAttendee } from '@recap/shared'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  meetingsByDate: { [date: string]: Meeting[] }
}

export default function Index({ meetingsByDate }: Props) {
  const displayNames = (selectedAttendees: MeetingAttendee[], otherAttendeesCount: number) => {
    const names = selectedAttendees.map((attendee) => attendee.name || attendee.email).join(', ')

    if (otherAttendeesCount > 0) {
      const others = otherAttendeesCount > 1 ? 'others' : 'other'

      return <div>{`${names}, ${otherAttendeesCount} ${others}`}</div>
    }

    return <div>{names}</div>
  }

  return (
    <>
      {Object.entries(meetingsByDate).map(([date, meetings], key) => {
        const formattedDate = getFormattedDate(date)

        return (
          <div key={key}>
            <div className="flex gap-[24px] sm:mb-[54px] mb-[40]">
              <div className="flex items-center gap-[8px] font-semibold">
                <div className="text-[15px]">{formattedDate.weekDay}</div>
                <div className="text-[12px] px-[4px] py-[2px] bg-gray-100 text-gray-500 rounded-[6px]">
                  {formattedDate.day}
                </div>
                <div className="text-gray-300">•</div>
                <div className="text-[15px]">{formattedDate.relativeDate}</div>
              </div>
              <div className="flex items-center grow">
                <hr />
              </div>
            </div>
            <div className="flex flex-col sm:gap-[54px] gap-[40px]">
              {meetings.map((meeting, key) => {
                // We only want to display a maximum of two avatars
                const attendees = Object.values(meeting.attendees)
                const selectedAttendees = attendees.slice(0, 2)
                const otherAttendeesCount = attendees.length - 2

                return (
                  <div className="group flex flex-col gap-[12px]" key={key}>
                    <div className="flex items-center gap-[12px]">
                      <img src={purpleMessage} alt="" />
                      <div className="font-semibold text-purple-500">
                        {meeting.emails.length > 2 ? 'Conference' : '1:1'}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`${MEETINGS}/${meeting.mid}`} className="sm:text-[20px] text-[15px] font-semibold">
                        {meeting.title}
                      </Link>
                      <Link
                        to={`${MEETINGS}/${meeting.mid}`}
                        className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100 group-hover:visible invisible"
                      >
                        <img src={exitArrow} alt="" />
                      </Link>
                    </div>
                    <div className="text-[15px] font-semibold flex items-center text-gray-500">
                      <div className="mr-[16px]">
                        {getTime(meeting.start)} - {getTime(meeting.end)}
                      </div>
                      <div className="flex mr-[8px]">
                        {selectedAttendees.map((attendee, key) => (
                          <UserAvatar
                            className="border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                            key={key}
                            name={attendee.name}
                            email={attendee.email}
                            avatar={attendee.avatar}
                          />
                        ))}
                      </div>
                      <div>{displayNames(selectedAttendees, otherAttendeesCount)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
