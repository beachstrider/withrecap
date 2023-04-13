import { UserStore, useAuthGuard } from '@recap/shared'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../App'
import { SkipButton } from '../../components/SkipButton'

import paperPlan from '../../../../assets/img/paperPlan.svg'

export const AutoSharing = () => {
  const { user } = useAuthGuard()
  const navigate = useNavigate()

  const userStore = useMemo(() => new UserStore(), [])

  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    // TODO: Handle errors
    userStore.update(user.uid, { autoSharing: toggle })

    // Note: If the use decides to enable it now, we
    // redirect him to the next step automatically
    if (toggle) {
      return navigate(ROUTES.Done)
    }
  }, [userStore, user, toggle, navigate])

  return (
    <>
      <h1 className="sm:mb-[24px] mb-[18px]">Would you like to share your meeting notes automatically?</h1>
      <p className="sm:mb-[84px] mb-[63px] text-gray-500">Most people save time by turning this on.</p>
      <div className="card">
        <div className="flex justify-between px-[24px] py-[20px]">
          <div className="flex gap-[12px] items-start">
            <img src={paperPlan} alt="" />
            <div>
              <div className="sm:text-[17px] text-[12px] font-semibold mb-[5px]">Automatic Sharing</div>
              <p className="text-gray-500">
                Recap will automatically send meeting notes to all
                <br />
                participants after a meeting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        <b>Automatic Sharing</b>
      </p>
      <label>
        <input onClick={() => setToggle(!toggle)} type="checkbox" />
        <span></span>
      </label>
      <SkipButton onClick={() => navigate(ROUTES.Done)} />
    </>
  )
}
