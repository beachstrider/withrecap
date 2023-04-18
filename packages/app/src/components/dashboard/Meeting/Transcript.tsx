import React from 'react'

import { ThumbsDown, ThumbsUp } from '../../buttons'

import listInCircle from '../../../assets/img/listInCircle.svg'
import matt from '../../../assets/img/matt.png'

export default function Transcript() {
  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between sm:mb-[34px] mb-[24px]">
        <div className="flex gap-[12px]">
          <img src={listInCircle} alt="" />
          <div className="font-semibold">Transcript</div>
          <div className="font-semibold text-gray-500">30 mins</div>
        </div>
        <div className="flex gap-[12px]">
          <ThumbsDown />
          <ThumbsUp checked />
        </div>
      </div>
      <div className="flex flex-col sm:gap-[40px] gap-[30px]">
        <TranscriptItem />
        <TranscriptItem />
        <TranscriptItem />
      </div>
    </div>
  )
}

const TranscriptItem = () => {
  return (
    <div className="flex sm:gap-[16px] gap-[12px]">
      <img src={matt} alt="" className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]" />
      <div className="flex flex-col sm:gap-[10px] gap-[6px]">
        <div className="font-semibold">Maxwell</div>
        <div className="text-gray-500">
          Alright, everyone, let's get started. Thanks for joining today's meeting. Our main goal today is to discuss
          the design of a new meditation app that can really stand out from the competition. We want to focus on
          innovative features and user experience, and make sure our app caters to the needs of our target audience.
          Before we dive into the details, does anyone have any initial thoughts or ideas?
        </div>
      </div>
    </div>
  )
}
