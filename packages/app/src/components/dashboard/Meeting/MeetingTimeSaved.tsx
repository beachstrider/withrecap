import React, { useEffect, useState } from 'react'

import gift from '../../../assets/img/Gift.svg'
import { Button } from '../../buttons'

export default function MeetingTimeSaved() {
  const [savingTime, setSavingTime] = useState(0)

  useEffect(() => {
    fetch()
  })

  async function fetch() {
    setSavingTime(8)
  }

  return (
    <div className="flex sm:flex-row flex-col sm:items-center gap-[24px]">
      <div className="text-[16px]">Recap saved you {savingTime} hours of meeting notes this week!</div>
      <div className="flex">
        <Button>
          <img src={gift} alt="" className="w-[16px] h-[16px]" />
          Help a friend save time
        </Button>
      </div>
    </div>
  )
}
