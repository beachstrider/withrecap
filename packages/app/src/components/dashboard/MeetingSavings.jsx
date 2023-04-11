import { useEffect, useState } from 'react'
import gift from '../../assets/img/Gift.svg'
import Badge from '../../components/display/Badge'

export default function () {
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
        <Badge>
          <img src={gift} alt="" className="w-[16px] h-[16px]" />
          Help a friend save time
        </Badge>
      </div>
    </div>
  )
}
