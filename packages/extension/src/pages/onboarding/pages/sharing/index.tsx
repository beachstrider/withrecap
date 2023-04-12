import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserStore, useAuthGuard } from '@recap/shared'

import { SkipButton } from '../../components/SkipButton'
import { ROUTES } from '../../App'

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
      <h1>Would you like to share your meeting notes automatically?</h1>
      <p>Most people save time by turning this on.</p>
      <p>
        <b>Automatic Sharing</b>
      </p>
      <p>Recap will automatically send meeting notes to all participants after a meeting.</p>
      <label>
        <input onClick={() => setToggle(!toggle)} type="checkbox" />
        <span></span>
      </label>
      <SkipButton onClick={() => navigate(ROUTES.Done)} />
    </>
  )
}
