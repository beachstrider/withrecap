import React from 'react'
import { Link } from 'react-router-dom'

import exitArrow from '../../../assets/img/exit-arrow-right.svg'
import purpleMessage from '../../../assets/img/purpleMessage.svg'

import jeff from '../../../assets/img/jeff.png'
import jessica from '../../../assets/img/jessica.png'
import lindsey from '../../../assets/img/lindsey.png'
import matt from '../../../assets/img/matt.png'
import sara from '../../../assets/img/sara.png'
import tom from '../../../assets/img/tom.png'
import { MEETINGS } from '../../../constants/routes'

export default function Index() {
  // dummy data
  const meetingGroups = [
    {
      date: {
        day: 'Tue',
        date: 21,
        dayLetter: 'Today',
        fullDate: '2023-04-21'
      },
      meetings: [
        {
          id: 1,
          startTime: '8:15 AM',
          endTime: '8:45 AM',
          type: 'Conference',
          name: 'Meditation App Kickoff',
          participants: [
            {
              name: 'Jessica',
              image: jessica
            },
            {
              name: 'Jeff',
              image: jeff
            }
          ]
        },
        {
          id: 2,
          startTime: '7:00 AM',
          endTime: '7:30 AM',
          type: '1:1',
          name: '1:1 Bobby/Jessica',
          participants: [
            {
              name: 'Jessica',
              image: jessica
            }
          ]
        }
      ]
    },
    {
      date: {
        day: 'Mon',
        date: 20,
        dayLetter: 'Yesterday',
        fullDate: '2023-04-20'
      },
      meetings: [
        {
          id: 3,
          startTime: '8:30 AM',
          endTime: '9:00 AM',
          type: '1:1',
          name: 'Meeting Title',
          participants: [
            {
              name: 'Matt',
              image: matt
            }
          ]
        },
        {
          id: 4,
          startTime: '8:14 AM',
          endTime: '8:45 AM',
          type: 'Conference',
          name: 'MT-S Brainstorm',
          participants: [
            {
              name: 'Tom',
              image: tom
            },
            {
              name: 'Sara',
              image: sara
            }
          ]
        }
      ]
    },
    {
      date: {
        day: 'Fri',
        date: 17,
        dayLetter: '',
        fullDate: '2023-04-17'
      },
      meetings: [
        {
          id: 5,
          startTime: '8:30 AM',
          endTime: '9:00 AM',
          type: '1:1',
          name: 'Meeting Title',
          participants: [
            {
              name: 'Lindsey',
              image: lindsey
            }
          ]
        }
      ]
    }
  ]

  return (
    <>
      {meetingGroups.map(({ date, meetings }, key) => (
        <div key={key}>
          <div className="flex gap-[24px] sm:mb-[54px] mb-[40]">
            <div className="flex items-center gap-[8px] font-semibold">
              <div className="text-[15px]">{date.day}</div>
              <div className="text-[12px] px-[4px] py-[2px] bg-gray-100 text-gray-500 rounded-[6px]">{date.date}</div>
              <div className="text-gray-300">•</div>
              <div className="text-[15px]">{date.dayLetter}</div>
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
                  <div className="font-semibold text-purple-500">{meeting.type}</div>
                </div>
                <div className="flex justify-between">
                  <Link to={`${MEETINGS}/${meeting.id}`} className="sm:text-[20px] text-[15px] font-semibold">
                    {meeting.name}
                  </Link>
                  <Link
                    to={`${MEETINGS}/${meeting.id}`}
                    className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100 group-hover:visible invisible"
                  >
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center text-gray-500">
                  <div className="mr-[16px]">
                    {meeting.startTime} - {meeting.endTime}
                  </div>
                  <div className="flex mr-[8px]">
                    {meeting.participants.map((user, key) => (
                      <img
                        key={key}
                        src={user.image}
                        alt=""
                        className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                      />
                    ))}
                  </div>
                  <div>{meeting.participants.map((user) => user.name).join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
