import React, { useEffect, useMemo, useState } from 'react'
import { AddonStore, UserAddonStore, useAuth } from '@recap/shared'

import Summary from '../components/Summary'
import Meeting from '../components/Meeting'

const Popup = () => {
  const { token, user } = useAuth()

  const userAddonStore = useMemo(() => new UserAddonStore(user.uid), [user.uid])
  const addonStore = useMemo(() => new AddonStore(), [])

  const [isInMeeting, setIsInMeeting] = useState<boolean>(false)
  const [meetingTitle, setMeetingTitle] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    chrome.tabs.query({ active: true, lastFocusedWindow: true }).then(async (tabs) => {
      if (!tabs || tabs.length === 0) {
        return
      }

      const addons = await userAddonStore.list()
      const tab = tabs[0]

      for (const id of Object.keys(addons)) {
        const addon = (await addonStore.get(id))!
        const regex = new RegExp(addon.regex)
        const matches = tab.url!.match(regex)

        if (matches) {
          setIsInMeeting(true)
          setMeetingTitle(matches[1])
        }
      }

      setLoading(false)
    })
  }, [userAddonStore, addonStore])

  if (loading) {
    return <p>Loading...</p>
  }

  return <div>{!isInMeeting ? <Summary uid={user.uid} /> : <Meeting accessToken={token} title={meetingTitle} />}</div>
}

export default Popup
