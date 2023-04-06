import React, { useEffect, useMemo, useState } from 'react'
import { AddonStore, Addons, UserAddonStore, UserAddons } from '@recap/shared'
import { SkipButton } from '../common'

interface AddonsSelectionProps {
  uid: string
  onNext: () => void
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

    // Note: For now, since we only have Google Meet working, we redirect
    // the user automatically to the next step once he enables it
    props.onNext()
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
      <SkipButton onClick={props.onNext} />
    </>
  )
}

export default AddonsSelection
