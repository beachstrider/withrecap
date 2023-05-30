import React, { useState } from 'react'

import { Meeting, MeetingAttendee, Message, getTimeDiff } from '@recap/shared'

import { ThumbsDown, ThumbsUp } from '../../buttons'

import listInCircle from '../../../assets/img/listInCircle.svg'
import UserAvatar from '../../display/UserAvatar'

interface Props {
  meeting: Meeting
}

export default function Transcript({ meeting: { start, end, conversation, attendees } }: Props) {
  const [like, setLike] = useState(0)

  function onSetLike(v: 1 | -1 | 0) {
    setLike(v)
  }

  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between sm:mb-[34px] mb-[24px]">
        <div className="flex gap-[12px]">
          <img src={listInCircle} alt="" />
          <div className="font-semibold">Transcript</div>
          <div className="font-semibold text-gray-500">{getTimeDiff(start, end)}</div>
        </div>
        {/** TODO: Display thumbs up/down once we allow feature */}
        {/**  <div className="flex gap-[12px]"> */}
        <div className="hidden">
          <ThumbsDown checked={like === -1} onClick={() => onSetLike(-1)} />
          <ThumbsUp checked={like === 1} onClick={() => onSetLike(1)} />
        </div>
      </div>
      <div className="flex flex-col sm:gap-[40px] gap-[30px]">
        {(conversation || []).map((msg, key) => (
          <TranscriptItem key={key} msg={msg} attendees={Object.values(attendees)} />
        ))}
      </div>
    </div>
  )
}

const TranscriptItem = ({ msg, attendees }: { msg: Message; attendees: MeetingAttendee[] }) => {
  const getAvatar = (speaker: string): string | undefined => {
    return attendees.find((a) => a.name === speaker)?.avatar
  }

  return (
    <div className="flex sm:gap-[16px] gap-[12px]">
      <UserAvatar
        name={msg.speaker}
        avatar={getAvatar(msg.speaker)}
        className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] sm:text-[10px] text-[7px]"
      />
      <div className="flex flex-col sm:gap-[10px] gap-[6px]">
        <div className="font-semibold">{msg.speaker}</div>
        <div className="text-gray-500">{msg.text}</div>
      </div>
    </div>
  )
}
