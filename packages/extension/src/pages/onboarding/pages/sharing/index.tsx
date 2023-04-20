import { UserStore, toast, useAuthGuard } from '@recap/shared'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Switch } from '@recap/shared'
import { ROUTES } from '../../App'
import { SkipButton } from '../../components/SkipButton'

import jeff from '../../../../assets/img/jeff.png'
import max from '../../../../assets/img/max.png'
import paperPlan from '../../../../assets/img/paperPlan.svg'

export const AutoSharing = () => {
  const { user } = useAuthGuard()
  const navigate = useNavigate()

  const userStore = useMemo(() => new UserStore(), [])

  const [toggle, setToggle] = useState<boolean>(false)

  const nextStep = useCallback(() => {
    setTimeout(() => {
      // Just to make navigation user friendly
      navigate(ROUTES.Done)
    }, 500)
  }, [navigate])

  useEffect(() => {
    userStore
      .get(user.uid)
      .then((u) => {
        if (u.autoSharing) {
          setToggle(true)
        }
      })
      .catch((err) => {
        toast.error('An error occurred while fetching your profile', err)
      })
  }, [userStore, user.uid])

  const toggleAutoSharing = async () => {
    try {
      await userStore.update(user.uid, { autoSharing: !toggle })

      setToggle(!toggle)

      return nextStep()
    } catch (err) {
      toast.error("Settings couldn't be saved", err)
    }
  }

  return (
    <>
      <h1 className="sm:mb-[24px] mb-[18px]">Would you like to share your meeting notes automatically?</h1>
      <p className="sm:mb-[84px] mb-[63px] text-gray-500">Most people save time by turning this on.</p>
      <div className="card sm:mb-[64px] mb-[48px]">
        <div className="flex justify-between items-center px-[24px] py-[20px]">
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
          <Switch checked={toggle} onClick={toggleAutoSharing} />
        </div>
        <div className="relative flex justify-center bg-gray-100 pt-[52px] overflow-hidden">
          <div className="">
            <div className="flex rotate-[-14deg] mb-[10px]">
              <div
                className="p-[20px] flex flex-col sm:gap-[16px] gap-[12px] rounded-[16px] min-w-[306px] bg-white"
                style={{
                  boxShadow:
                    '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="flex gap-[10px] text-gray-500 sm:text-[17px] text-[14px]">
                  <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                  <div className="">
                    We should have <span className="font-semibold">fun</span> with the
                    <br />
                    design and <span className="font-semibold">make it pop</span>!
                  </div>
                </div>
                <div className="flex sm:gap-[16px] gap-[12px]">
                  <img src={max} alt="" className="w-[24px] h-[24px]" />
                  <div className="font-semibold">maxwell@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="flex rotate-[5deg] ml-[2px] mb-[-30px]">
              <div
                className="p-[20px] flex flex-col sm:gap-[16px] gap-[12px] rounded-[16px] min-w-[306px] bg-white"
                style={{
                  boxShadow:
                    '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="flex gap-[10px] text-gray-500 sm:text-[17px] text-[14px]">
                  <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                  <div className="">
                    We should have <span className="font-semibold">fun</span> with the
                    <br />
                    design and <span className="font-semibold">make it pop</span>!
                  </div>
                </div>
                <div className="flex sm:gap-[16px] gap-[12px]">
                  <img src={jeff} alt="" className="w-[24px] h-[24px]" />
                  <div className="font-semibold">jeff.m@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkipButton onClick={() => navigate(ROUTES.Done)} />
    </>
  )
}
