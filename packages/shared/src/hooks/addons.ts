import { useEffect, useMemo, useState } from 'react'

import { useAuthGuard } from '../auth/AuthGuard'
import { Addon, AddonStore, Addons } from '../storage/addons'
import { UserAddonConfig, UserAddonStore, UserAddons } from '../storage/users/addons'
import { useErrors } from './error'

export function useAddons() {
  const { user } = useAuthGuard()
  const { error, setError } = useErrors(null)

  const userAddonStore = useMemo(() => new UserAddonStore(user.uid), [user.uid])
  const addonStore = useMemo(() => new AddonStore(), [])

  const [addons, setAddons] = useState<Addons>({})
  const [userAddons, setUserAddons] = useState<UserAddons>({})
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    addonStore
      .list()
      .then((a) => {
        userAddonStore.list().then((ua) => {
          setUserAddons(ua)
          setAddons(a)
          setError(null)
          setLoading(false)
        })
      })
      .catch((err: Error) => setError({ message: 'An error occurred while fetching your addons', err }))
  }, [addonStore, userAddonStore, setError])

  const enableAddon = async (id: string, addon: Addon) => {
    try {
      const config: UserAddonConfig = { url: addon.url, regex: addon.regex, enabled: true }
      await userAddonStore.insert(id, config)

      userAddons[id] = config
      setUserAddons({ ...userAddons })
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while enabling integration', err: err as Error })
    }
  }

  return { addons, userAddons, enableAddon, loading, error }
}
