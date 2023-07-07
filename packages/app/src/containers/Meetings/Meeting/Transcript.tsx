import React, { useEffect, useRef, useState } from 'react'

import SelectionPopup, { HandleRef } from 'react-selection-popup'

import { Meeting, MeetingAttendee, Message, getTimeDiff, toast, useHighlight, useTodo } from '@recap/shared'

import { ThumbsDown, ThumbsUp } from '../../../components/buttons'
import UserAvatar from '../../../components/display/UserAvatar'

import check from '../../../assets/img/check.svg'
import listInCircle from '../../../assets/img/listInCircle.svg'
import star4 from '../../../assets/img/star4.svg'

interface Props {
  meeting: Meeting
  refreshTodos: () => Promise<void>
  refreshHighlights: () => Promise<void>
}

type SelectedTranscript = {
  speaker: string
  text: string
}

const Transcript = ({
  meeting: { mid, start, end, conversation, attendees },
  refreshTodos,
  refreshHighlights
}: Props) => {
  const [like, setLike] = useState(0)
  const [selectedTranscript, setSelectedTranscript] = useState<SelectedTranscript | null>(null)

  const { addTodo, error: errorTodo } = useTodo(mid)
  const { addHighlight, error: errorHighlight } = useHighlight(mid)

  const popupHandleRef = useRef<HandleRef>(null)

  const onSetLike = (v: 1 | -1 | 0) => {
    setLike(v)
  }

  const onAddHighlight = async () => {
    if (selectedTranscript) {
      const highlight = {
        text: selectedTranscript.text,
        speaker: selectedTranscript.speaker
      }

      await addHighlight(highlight)
      await refreshHighlights()
    }

    popupHandleRef.current?.close()
  }

  const onAddTodo = async () => {
    if (selectedTranscript) {
      const todo = {
        text: selectedTranscript.text,
        completed: false
      }

      await addTodo(todo)
      await refreshTodos()
    }

    popupHandleRef.current?.close()
  }

  useEffect(() => {
    if (errorTodo) {
      toast.error(errorTodo.message, errorTodo.err)
    }

    if (errorHighlight) {
      toast.error(errorHighlight.message, errorHighlight.err)
    }
  }, [errorTodo, errorHighlight])

  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between sm:mb-[34px] mb-[24px] select-none">
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
      {
        <SelectionPopup
          ref={popupHandleRef}
          selectionClassName="selection"
          multipleSelection={false}
          offsetToTop={5}
          metaAttrName="data-meta"
          onSelect={(text, meta) => setSelectedTranscript({ text, speaker: meta.speaker })}
          onClose={() => setSelectedTranscript(null)}
          className="px-[8px] py-[6px] bg-black text-white text-[15px] rounded-[30px] flex items-center gap-[10px]"
        >
          <button className="flex items-center gap-[6px]" onClick={onAddHighlight}>
            <img src={star4} alt="" width={14} />
            Highlight
          </button>
          <div className="w-[2px] bg-[#ffffff26] h-[16px]"></div>
          <button className="flex items-center gap-[6px]" onClick={onAddTodo}>
            <img src={check} alt="" width={12} />
            Add to Todo
          </button>
        </SelectionPopup>
      }
      <div className="flex flex-col sm:gap-[40px] gap-[30px] relative">
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
        <div className="font-semibold select-none">{msg.speaker}</div>
        <div className="text-gray-500 selection" data-meta={JSON.stringify(msg)}>
          {msg.text}
        </div>
      </div>
    </div>
  )
}

export default Transcript
