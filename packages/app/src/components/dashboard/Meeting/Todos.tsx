import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import dots from '../../../assets/img/dots.svg'
import greenCheck from '../../../assets/img/greenCheck.png'
import add from '../../../assets/img/plus.svg'
import unchecked from '../../../assets/img/unchecked.png'
import { ThumbsDown, ThumbsUp } from '../../../components/buttons'

export default function Todos() {
  const [like, setLike] = useState(0)

  function onSetLike(v: 1 | -1 | 0) {
    setLike(v)
  }

  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between">
        <div className="flex sm:gap-[16px] gap-[12px] items-center sm:mb-[34px] mb-[25px]">
          <img src={greenCheck} alt="" className="w-[28px] h-[28px]" />
          <div className="font-semibold">To-do's</div>
          <div className="font-semibold text-gray-500">3</div>
        </div>
        <div className="flex gap-[12px]">
          <ThumbsDown checked={like === -1} onClick={() => onSetLike(-1)} />
          <ThumbsUp checked={like === 1} onClick={() => onSetLike(1)} />
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[20px] text-gray-900 group">
          <img src={unchecked} alt="" className="w-[20px] h-[20px]" />
          <div className="grow">Maxwell and Jessica to brainstorm marketing strategy</div>
          <Link to="#" className="invisible group-hover:visible">
            <img src={dots} alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-[20px] text-gray-900 group">
          <img src={unchecked} alt="" className="w-[20px] h-[20px]" />
          <div className="grow">Justin to present latest product updates to engineering team</div>
          <Link to="#" className="invisible group-hover:visible">
            <img src={dots} alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-[20px] text-gray-900 group">
          <img src={unchecked} alt="" className="w-[20px] h-[20px]" />
          <div className="grow">Jessica to walk through storyboard with design team</div>
          <Link to="#" className="invisible group-hover:visible">
            <img src={dots} alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-[20px] text-gray-500 font-semibold">
          <img src={add} alt="" className="ml-[4px] w-[16px] h-[16px]" />
          <div>Add</div>
        </div>
      </div>
    </div>
  )
}
