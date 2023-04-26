import { Meeting } from '@recap/shared'
import copy from 'copy-to-clipboard'
import React, { useEffect, useState } from 'react'

interface SharingProps {
  meeting: Meeting
}

export const Sharing = ({ meeting }: SharingProps) => {
  const [copied, setCopied] = useState<boolean>(false)
  const [domain, setDomain] = useState<string>('')

  useEffect(() => {
    const url = process.env.RECAP_APP_BASE_URL || ''

    // Removes http(s):// from URL
    const d = url.replace(/^https?:\/\//, '')

    setDomain(d)
  }, [])

  const onCopy = () => {
    const copied = copy(`${process.env.RECAP_APP_BASE_URL}/app/meetings/${meeting.mid}`)

    setCopied(copied)
  }

  return (
    <div className="">
      <p className="font-semibold mt-[26px] mb-[18px]">Share meeting notes</p>
      <div className="flex gap-[6px] text-[15px]">
        <div className="grow rounded-[12px] bg-white border-[2px] border-solid border-gray-200 px-[12px] py-[8px] truncate">
          {domain}/<span className="text-gray-500">{meeting.mid}</span>
        </div>
        <button onClick={onCopy} className="bg-gray-950 font-semibold text-white rounded-[12px] px-[13.5px] py-[8px]">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
