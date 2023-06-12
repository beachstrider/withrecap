import { Meeting } from '@recap/shared'
import copy from 'copy-to-clipboard'
import React, { useState } from 'react'

export default function Processing({ meeting }: { meeting: Meeting }) {
  const [copied, setCopied] = useState<boolean>(false)

  const onCopy = () => {
    const copied = copy(`${process.env.RECAP_APP_BASE_URL}/app/meetings/${meeting!.mid}`)

    setCopied(copied)
  }

  return (
    <div className="bg-[#F1F3F5] sm:rounded-[16px] rounded-[12px] sm:px-[26px] px-[18px] sm:py-[32px] py-[24px] flex flex-col sm:gap-[20px] gap-[15px]">
      <h4 className="font-semibold">Recap is getting your notes ready</h4>
      <div className="max-w-[610px]">
        We’ll email you when we’re finished. Share a link with select participants, or email a copy to all participants
        when the notes are ready.
      </div>
      <div className="flex gap-[12px]">
        <p className="grow bg-white text-[#222734] sm:rounded-[12px] rounded-[9px] sm:px-[12px] px-[9px] sm:py-[10px] py-[7px]">
          <span className="text-[#69707A]">withrecap.com/</span>
          app/meetings/{meeting.mid}
        </p>
        <button
          onClick={onCopy}
          className="bg-gray-950 font-semibold text-white sm:rounded-[12px] rounded-[9px] sm:px-[12px] px-[9px] flex justify-center items-center"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
