import React, { useEffect, useMemo, useState } from 'react'
import { AddonStore, Addons, UserAddonStore, UserAddons } from '@recap/shared'

interface AddonsSelectionProps {
  uid: string
}

const AddonsSelection = (props: AddonsSelectionProps) => {
  const userAddonStore = useMemo(() => new UserAddonStore(props.uid), [props.uid])
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

  const enableAddon = async (id: string) => {
    await userAddonStore.insert(id)

    setAddons({ ...addons, [id]: { ...addons[id], available: true } })
  }

  const isEnabled = (id: string): boolean => {
    return userAddons[id]?.enabled
  }

  const renderAddonList = () => {
    return Object.entries(addons).map(([id, addon]) => (
      <li key={id}>
        <div>{id}</div>
        <button disabled={!addon.available || isEnabled(id)} onClick={async () => await enableAddon(id)}>
          {isEnabled(id) ? 'Enabled' : addon.available ? 'Connect' : 'Coming Soon'}
        </button>
      </li>
    ))
  }

  return (
    <>
      <h1>Add Recap to your video call apps</h1>
      <ul>{renderAddonList()}</ul>
      <a href="./">Skip</a>
    </>
  )
}

export default AddonsSelection
