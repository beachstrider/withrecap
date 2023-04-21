import React from 'react'
import { Link } from 'react-router-dom'
import gift from '../../../../assets/img/gift.svg'

export const InviteFriends = () => {
  return (
    <div className="flex flex-col items-start py-[24px]">
      <h6 className="mb-[8px]">Invite Friends</h6>
      <p className="text-gray-500 mb-[18px]">Recap saved you 8 hours of meeting notes.</p>
      <Link
        to="#"
        className={`text-[15px] flex items-center gap-[6px] px-[10px] py-[6px] font-semibold bg-gray-100 rounded-[12px]`}
      >
        <img src={gift} alt="" className="w-[16px] h-[16px]" />
        Help a friend save time
      </Link>
    </div>
  )
}
