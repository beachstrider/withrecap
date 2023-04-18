import React from 'react'

import { ThumbsDown, ThumbsUp } from '../../buttons'

import matt from '../../../assets/img/matt.png'
import tetragram from '../../../assets/img/tetragram.svg'

export default function Highlights() {
  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between sm:mb-[34px] mb-[24px]">
        <div className="flex gap-[12px]">
          <img src={tetragram} alt="" />
          <div className="font-semibold">Highlights</div>
          <div className="font-semibold text-gray-500">6</div>
        </div>
        <div className="flex gap-[12px]">
          <ThumbsDown />
          <ThumbsUp checked />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 sm:gap-[20px] gap-[15px]">
        <div className="flex flex-col sm:gap-[20px] gap-[15px]">
          <Highlight />
        </div>
        <div className="flex flex-col sm:gap-[20px] gap-[15px]">
          <Highlight />
        </div>
        <div className="flex flex-col sm:gap-[20px] gap-[15px]">
          <Highlight />
        </div>
      </div>
    </div>
  )
}

const Highlight = () => {
  return (
    <div className="card sm:rounded-[16px] sm:p-[20px] p-[15px] flex flex-col sm:gap-[16px] gap-[12px]">
      <div className="flex sm:gap-[18px] gap-[12px]">
        <div className="vertical-line" />
        <div className="py-[8px] text-[17px] text-gray-500 grow">
          We should have fun with the design and make it pop!
        </div>
      </div>
      <div className="flex sm:gap-[16px] gap-[12px]">
        <img src={matt} alt="" className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]" />
        <div className="font-semibold">Maxwell</div>
      </div>
    </div>
  )
}
