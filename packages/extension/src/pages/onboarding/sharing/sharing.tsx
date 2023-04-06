import React, { useEffect, useMemo, useState } from 'react'
import { UserStore } from '@recap/shared'
import { SkipButton } from '../common'

interface AutoSharingProps {
  uid: string
  onNext: () => void
}

const AutoSharing = (props: AutoSharingProps) => {
  const userStore = useMemo(() => new UserStore(), [])

  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    // TODO: Handle errors
    userStore.update(props.uid, { autoSharing: toggle })

    // Note: If the use decides to enable it now, we
    // redirect him to the next step automatically
    if (toggle) {
      props.onNext()
    }
  }, [userStore, props.uid, props, toggle])

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
      <SkipButton onClick={props.onNext} />
    </>
  )
}

export default AutoSharing
