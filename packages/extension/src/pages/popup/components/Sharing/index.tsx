import { Meeting } from '@recap/shared'
import copy from 'copy-to-clipboard'
import React, { useState } from 'react'

interface SharingProps {
  meeting: Meeting
}

export const Sharing = ({ meeting }: SharingProps) => {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    copy(`${process.env.RECAP_APP_BASE_URL}/${meeting.mid}`)
    setCopied(true)
  }
  return (
    <div className="">
      <p className="font-semibold mt-[26px] mb-[18px]">Share meeting notes</p>
      <div className="flex gap-[6px] text-[15px]">
        <div className="grow rounded-[12px] bg-white border-[2px] border-solid border-gray-200 px-[12px] py-[8px]">
          {process.env.RECAP_APP_BASE_URL?.substring(8)}/<span className="text-gray-500">{meeting.mid}</span>
        </div>
        <button onClick={onCopy} className="bg-gray-950 font-semibold text-white rounded-[12px] px-[13.5px] py-[8px]">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
