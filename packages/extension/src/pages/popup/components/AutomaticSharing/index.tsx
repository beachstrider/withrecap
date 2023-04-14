import { Switch } from '@recap/shared'
import React, { useState } from 'react'
import paperPlan from '../../../../assets/img/paperPlanPurple.svg'

export const AutomaticSharing = () => {
  const [automaticSharing, setAutomaticSharing] = useState(false)

  return (
    <div className="py-[24px]">
      <div className="flex justify-between items-center mb-[8px]">
        <div className="flex gap-[10px] grow">
          <img src={paperPlan} alt="" className="w-[20px] h-[20px]" />
          <div className="font-semibold text-[15px]">Automatic Sharing</div>
        </div>
        <div>
          <Switch checked={automaticSharing} onClick={() => setAutomaticSharing(!automaticSharing)} />
        </div>
      </div>
      <p className="text-gray-500">
        Recap will automatically send meeting notes to all participants after each meeting.
      </p>
    </div>
  )
}
