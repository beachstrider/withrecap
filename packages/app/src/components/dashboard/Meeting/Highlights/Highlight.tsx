import React from 'react'

import { MeetingHighlight } from '@recap/shared'
import UserAvatar from '../../../display/UserAvatar'

interface HighlightProps {
  highlight: MeetingHighlight
}

export function Highlight({ highlight }: HighlightProps) {
  return (
    <div className="flex flex-col sm:gap-[20px] gap-[15px]">
      <div className="card sm:!rounded-[16px] !rounded-[12px] sm:p-[20px] p-[15px] flex flex-col sm:gap-[16px] gap-[12px]">
        <div className="flex sm:gap-[18px]">
          <div className="hidden vertical-line sm:block" />
          <div className="py-[8px] sm:text-[17px] text-[12px] text-gray-500 grow">{highlight.text}</div>
        </div>
        <div className="flex sm:gap-[16px] gap-[12px]">
          <UserAvatar name={highlight.speaker} className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]" />
          <div className="flex items-center font-semibold">{highlight.speaker}</div>
        </div>
      </div>
    </div>
  )
}
