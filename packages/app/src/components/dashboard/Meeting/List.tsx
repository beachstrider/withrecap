import { Meeting, MeetingStore, UserMeetingStore } from '@recap/shared'
import { format, formatRelative } from 'date-fns'
import { enUS } from 'date-fns/locale'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import exitArrow from '../../../assets/img/exit-arrow-right.svg'
import purpleMessage from '../../../assets/img/purpleMessage.svg'

import { useAuth } from '../../../auth/AuthProvider'
import { MEETINGS } from '../../../constants/routes'

export default function Index() {
  const { user } = useAuth()

  const meetingStore = useMemo(() => new MeetingStore(), [])
  const userMeetingStore = useMemo(() => new UserMeetingStore(user.uid), [user.uid])

  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [meetingsByDate, setMeetingsByDate] = useState<{ [date: string]: Meeting[] }>({})

  useEffect(() => {
    userMeetingStore.list().then((mids) => {
      meetingStore.getByIds(mids).then(setMeetings)
    })
  }, [userMeetingStore, meetingStore])

  useEffect(() => {
    if (meetings.length) {
      console.log('meetings', meetings)
      const byDate: { [date: string]: Meeting[] } = {}
      for (const meeting of meetings) {
        const date = format(new Date(meeting.start), 'MM-dd-yy')

        if (!byDate[date]) {
          byDate[date] = []
        }

        byDate[date].push(meeting)
      }

      setMeetingsByDate(byDate)
    }
  }, [meetings])

  const formatDate = (date: string): { weekDay: string; day: string; relativeDate: string } => {
    // See: https://github.com/date-fns/date-fns/issues/1218
    const formatRelativeLocale: { [token: string]: string } = {
      lastWeek: "'Last' eeee",
      yesterday: "'Yesterday'",
      today: "'Today'",
      other: 'dd.MM.yyyy'
    }

    const locale = {
      ...enUS,
      formatRelative: (token: string) => formatRelativeLocale[token]
    }

    // See: https://date-fns.org/v2.29.3/docs/format
    return {
      weekDay: format(new Date(date), 'EEE'),
      day: format(new Date(date), 'd'),
      relativeDate: formatRelative(new Date(date), new Date(), { locale })
    }
  }

  console.debug('---meetings', meetingsByDate)

  return (
    <>
      {Object.entries(meetingsByDate).map(([date, meetings], key) => {
        const formattedDate = formatDate(date)

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
              {meetings.map((meeting, key) => (
                <div className="group flex flex-col gap-[12px]" key={key}>
                  <div className="flex items-center gap-[12px]">
                    <img src={purpleMessage} alt="" />
                    <div className="font-semibold text-purple-500">
                      {meeting.attendees?.length > 2 ? 'Conference' : '1:1'}
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
                      {format(new Date(meeting.start), 'h:mm a')} - {format(new Date(meeting.end), 'h:mm a')}
                    </div>
                    <div className="flex mr-[8px]">
                      {/** TODO: Should display a letter if avatar is null */}
                      {meeting.attendees.map((attendee, key) => (
                        <img
                          key={key}
                          src={attendee.avatar}
                          alt=""
                          className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                        />
                      ))}
                    </div>
                    <div>{meeting.attendees.map((attendee) => attendee.name).join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}
