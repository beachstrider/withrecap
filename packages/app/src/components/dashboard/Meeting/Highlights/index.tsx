import React from 'react'

import { Meeting, MeetingHighlight } from '@recap/shared'
import { Highlight } from './Highlight'

import tetragram from '../../../../assets/img/tetragram.svg'

interface HighlightsProps {
  meeting: Meeting
}

export default function Highlights({ meeting }: HighlightsProps) {
  // const [like, setLike] = useState(0)

  const highlights: MeetingHighlight[] = [
    {
      id: '1',
      speaker: 'Maxwell',
      text: 'We should have fun with the design and make it pop!'
    },
    {
      id: '2',
      speaker: 'Lindsey',
      text: 'What if we removed the header? How would that look? Just something to consider!'
    },
    {
      id: '3',
      speaker: 'Maxwell',
      text: 'this is a really long highlight that just to show that it could indeed go onto two lines!'
    },
    {
      id: '4',
      speaker: 'Lindsey',
      text: 'We shouldn’t forget to explore a more serious direction!'
    },
    {
      id: '5',
      speaker: 'Maxwell',
      text: 'We should have fun with the design and make it pop!'
    },
    {
      id: '6',
      speaker: 'Jessica',
      text: 'this is a really long highlight that just to show that it could indeed go onto two lines!'
    }
  ]

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
