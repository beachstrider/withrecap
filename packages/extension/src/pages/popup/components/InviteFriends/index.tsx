import React, { useState } from 'react'
import gift from '../../../../assets/img/gift.svg'

export const InviteFriends = () => {
  const [emails, setEmails] = useState('')
  const [status, setStatus] = useState<'inactive' | 'active' | 'done'>('inactive')

  const send = () => {
    setStatus('done')
  }

  return (
    <div>
      <hr className="my-[24px] bg-gray-100" />
      <div className="flex flex-col items-start">
        <h6 className="mb-[8px]">Invite Friends</h6>
        {status === 'inactive' && (
          <>
            <p className="text-gray-500 mb-[18px]">Recap saved you 8 hours of meeting notes.</p>
            <button
              onClick={() => setStatus('active')}
              className={`text-[15px] flex items-center gap-[6px] px-[10px] py-[6px] font-semibold bg-gray-100 rounded-[12px]`}
            >
              <img src={gift} alt="" className="w-[16px] h-[16px]" />
              Help a friend save time
            </button>
          </>
        )}
        {status === 'active' && (
          <div className="grow flex flex-col w-full gap-[14px]">
            <textarea
              rows={1}
              className="grow rounded-[12px] bg-white border-[2px] border-solid border-gray-200 px-[12px] py-[8px] text-[15px]"
              placeholder="john@doe.com, jane@brown"
            />
            <button onClick={send} className="bg-gray-950 text-white rounded-[12px] px-[13.5px] py-[8px] text-[15px]">
              Send
            </button>
          </div>
        )}
        {status === 'done' && <div className="text-[15px]">We've sent an invitation to the emails!</div>}
      </div>
    </div>
  )
}
