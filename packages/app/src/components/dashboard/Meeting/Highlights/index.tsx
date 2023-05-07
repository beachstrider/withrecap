import React, { useEffect } from 'react'

import { Meeting, toast, useHighlights } from '@recap/shared'
import { Highlight } from './Highlight'

import tetragram from '../../../../assets/img/tetragram.svg'

interface HighlightsProps {
  mid: Meeting['mid']
}

export default function Highlights({ mid }: HighlightsProps) {
  // TODO: Handle loading?
  const { highlights, error } = useHighlights(mid)

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  // const [like, setLike] = useState(0)

  // function onSetLike(v: 1 | -1 | 0) {
  //   setLike(v)
  // }

  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between sm:mb-[34px] mb-[24px]">
        <div className="flex gap-[12px]">
          <img src={tetragram} alt="" />
          <div className="font-semibold">Highlights</div>
          <div className="font-semibold text-gray-500">{highlights.length}</div>
        </div>
        <div className="flex gap-[12px]">
          {/* NOTE: like & unlike, currently not scoped */}
          {/* <ThumbsDown checked={like === -1} onClick={() => onSetLike(-1)} />
          <ThumbsUp checked={like === 1} onClick={() => onSetLike(1)} /> */}
        </div>
      </div>
      <div className="masonry-3 sm:gap-[20px] gap-[15px]">
        {highlights.map((highlight, key) => (
          <Highlight key={key} highlight={highlight} />
        ))}
      </div>
    </div>
  )
}
