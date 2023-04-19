import { Addon, AddonStore, Addons, UserAddonConfig, UserAddonStore, UserAddons } from '@recap/shared'
import React, { useEffect, useMemo, useState } from 'react'

import { useAuth } from '../auth/AuthProvider'
import Layout from '../components/layouts'

export default function Index() {
  const { user } = useAuth()

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
  }

  const isEnabled = (id: string): boolean => {
    return userAddons[id]?.enabled
  }

  return (
    <Layout>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="sm:mb-[58px] mb-[42px]">
          <h4 className="font-semibold mb-[10px]">Integrations</h4>
          <div className="text-gray-500">Manage which video call apps Recap will take your notes from.</div>
        </div>
        <div className="flex flex-col sm:gap-[16px] gap-[12px]">
          {Object.entries(addons).map(([id, addon]) => (
            <div
              className={`flex justify-between items-center w-full px-[24px] py-[16px] rounded-[16px] ${
                addon.available ? 'bg-gray-100' : ''
              }`}
              key={id}
            >
              <div className="flex gap-[12px] items-center">
                <img src={addon.logo} alt={`${addon.name} Logo`} className="w-[50px] h-[50px]" />
                <div className="flex flex-col gap-[1px]">
                  <div className="sm:text-[17px] text-[12px] font-semibold">{addon.name}</div>
                  {addon.popular ? <div className="text-gray-500">Most Popular</div> : ''}
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
          ))}
        </div>
      </div>
    </Layout>
  )
}
