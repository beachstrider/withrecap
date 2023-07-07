import paperPlan from '../../../../assets/img/paperPlanPurple.svg'
import { Switch, UserStore } from '@recap/shared'
import React, { useEffect, useMemo, useState } from 'react'

interface AutomaticSharingProps {
  uid: string
}

export const AutomaticSharing = ({ uid }: AutomaticSharingProps) => {
  const userStore = useMemo(() => new UserStore(), [])

  const [automaticSharing, setAutomaticSharing] = useState(false)

  useEffect(() => {
    userStore.get(uid).then((u) => {
      if (u.autoSharing) {
        setAutomaticSharing(true)
      }
    })
  }, [userStore, uid])

  const toggleAutoSharing = async () => {
    await userStore.update(uid, { autoSharing: !automaticSharing })
    setAutomaticSharing(!automaticSharing)
  }

  return (
    <div className="hidden py-[24px]">
      <div className="flex justify-between items-center mb-[8px]">
        <div className="flex gap-[10px] grow">
          <img src={paperPlan} alt="" className="w-[20px] h-[20px]" />
          <div className="font-semibold text-[15px]">Automatic Sharing</div>
        </div>
        <div>
          <Switch checked={automaticSharing} onClick={toggleAutoSharing} />
        </div>
      </div>
      <p className="text-gray-500">
        Recap will automatically send meeting notes to all participants after each meeting.
      </p>
    </div>
  )
}
