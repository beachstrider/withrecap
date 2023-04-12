import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Addon, AddonStore, Addons, UserAddonConfig, UserAddonStore, UserAddons, useAuthGuard } from '@recap/shared'

import { SkipButton } from '../../components/SkipButton'
import { ROUTES } from '../../App'

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
      <li key={id}>
        <div>{addon.name}</div>
        <button disabled={!addon.available || isEnabled(id)} onClick={async () => await enableAddon(id, addon)}>
          {isEnabled(id) ? 'Enabled' : addon.available ? 'Connect' : 'Coming Soon'}
        </button>
      </li>
    ))
  }

  return (
    <>
      <h1>Add Recap to your video call apps</h1>
      <ul>{renderAddonList()}</ul>
      <SkipButton onClick={() => navigate(ROUTES.Sharing)} />
    </>
  )
}
