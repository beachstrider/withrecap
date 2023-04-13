import { Addon, AddonStore, Addons, UserAddonConfig, UserAddonStore, UserAddons, useAuthGuard } from '@recap/shared'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../App'
import { SkipButton } from '../../components/SkipButton'

export const AddonsSelection = () => {
  const { user } = useAuthGuard()
  const navigate = useNavigate()

  const userAddonStore = useMemo(() => new UserAddonStore(user.uid), [user.uid])
  const addonStore = useMemo(() => new AddonStore(), [])

  const [addons, setAddons] = useState<Addons>({})
  const [userAddons, setUserAddons] = useState<UserAddons>({})

  useEffect(() => {
    // TODO: Handle errors
    addonStore.list().then((a) => {
      userAddonStore.list().then((ua) => {
        setUserAddons(ua)
        setAddons(a)
      })
    })
  }, [addonStore, userAddonStore])

  const enableAddon = async (id: string, addon: Addon) => {
    const config: UserAddonConfig = { url: addon.url, regex: addon.regex, enabled: true }
    await userAddonStore.insert(id, config)

    userAddons[id] = config
    setUserAddons({ ...userAddons })

    // Note: For now, since we only have Google Meet working, we redirect
    // the user automatically to the next step once he enables it
    return navigate(ROUTES.Sharing)
  }

  const isEnabled = (id: string): boolean => {
    return userAddons[id]?.enabled
  }

  const renderAddonList = () => {
    return Object.entries(addons).map(([id, addon]) => (
      <div
        className={`flex justify-between items-center w-full px-[24px] py-[16px] rounded-[16px] ${
          addon.available ? 'bg-gray-100' : ''
        }`}
        key={id}
      >
        <div className="flex gap-[12px] items-center">
          {/* Todo: add meeting provider icon in collection */}
          <img src="" alt="" className="w-[50px] h-[50px]" />
          <div className="flex flex-col gap-[1px]">
            <div className="sm:text-[17px] text-[12px] font-semibold">{addon.name}</div>
            {addon.name === 'Google Meet' ? <div className="text-gray-500">Most Popular</div> : ''}
          </div>
        </div>
        <button
          disabled={!addon.available || isEnabled(id)}
          onClick={async () => await enableAddon(id, addon)}
          className={`px-[14px] py-[10px] rounded-[14px] sm:text-[15px] text-[12px] font-semibold ${
            addon.available ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          {isEnabled(id) ? 'Enabled' : addon.available ? 'Connect' : 'Coming Soon'}
        </button>
      </div>
    ))
  }

  return (
    <>
      <h1 className="sm:mb-[64px] mb-[48px]">Add Recap to your video call apps</h1>
      <div className="flex flex-col gap-[16px] sm:mb-[64px] mb-[48px]">{renderAddonList()}</div>
      <div className="flex justify-center">
        <SkipButton onClick={() => navigate(ROUTES.Sharing)} />
      </div>
    </>
  )
}
