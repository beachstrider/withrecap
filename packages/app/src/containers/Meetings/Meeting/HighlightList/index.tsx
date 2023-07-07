import tetragram from '../../../../assets/img/tetragram.svg'
import { Highlight } from './Highlight'
import { Highlights } from '@recap/shared'
import React from 'react'

interface HighlightsProps {
  mid: string
  highlights: Highlights
  refresh: () => Promise<void>
  disabled?: boolean
}

export default function HighlightList({ mid, highlights, refresh, disabled = false }: HighlightsProps) {
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
