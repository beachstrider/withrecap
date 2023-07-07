import React, { useState } from 'react'

import ReactMarkdown from 'react-markdown'

import { Meeting } from '@recap/shared'

import { ThumbsDown, ThumbsUp } from '../../../components/buttons'

import listInCircle from '../../../assets/img/listInCircle.svg'

interface Props {
  meeting: Meeting
}

export default function Summary({ meeting: { summary } }: Props) {
  const [like, setLike] = useState(0)

  function onSetLike(v: 1 | -1 | 0) {
    setLike(v)
  }

  return (
    <>
      <div className="flex justify-between mb-[34px]">
        <div className="flex gap-[12px]">
          <img src={listInCircle} alt="" />
          <div className="font-semibold">Summary</div>
        </div>
        {/** TODO: Display thumbs up/down once we allow feature */}
        {/**  <div className="flex gap-[12px]"> */}
        <div className="hidden">
          <ThumbsDown checked={like === -1} onClick={() => onSetLike(-1)} />
          <ThumbsUp checked={like === 1} onClick={() => onSetLike(1)} />
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-[34px] sm:mb-[82px] mb-[63px]">
        <ReactMarkdown children={summary || ''} />
      </div>
    </>
  )
}
