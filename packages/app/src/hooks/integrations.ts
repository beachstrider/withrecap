import { Addon, AddonStore, Addons, UserAddonConfig, UserAddonStore, UserAddons } from '@recap/shared'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../auth/AuthProvider'

export function useIntegrations() {
  const { user } = useAuth()

  const userAddonStore = useMemo(() => new UserAddonStore(user.uid), [user.uid])
  const addonStore = useMemo(() => new AddonStore(), [])

  const [addons, setAddons] = useState<Addons>({})
  const [userAddons, setUserAddons] = useState<UserAddons>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // TODO: Handle errors
    addonStore.list().then((a) => {
      userAddonStore.list().then((ua) => {
        setUserAddons(ua)
        setAddons(a)
        setLoading(false)
        setError(null)
      })
    })
  }, [addonStore, userAddonStore])

  const enableAddon = async (id: string, addon: Addon) => {
    const config: UserAddonConfig = { url: addon.url, regex: addon.regex, enabled: true }
    await userAddonStore.insert(id, config)

    userAddons[id] = config
    setUserAddons({ ...userAddons })
  }

  return { addons, userAddons, enableAddon, loading, error }
}
