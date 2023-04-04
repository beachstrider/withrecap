import React, { useEffect, useMemo, useState } from 'react'
import { User } from 'firebase/auth'
import { UserStore } from '@recap/shared'

import AddonsSelection from './addons/addons'
import SignIn from './signin/signin'

import './onboarding.css'

const Onboarding = () => {
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [step, setStep] = useState<number>(1)

  useEffect(() => {
    if (user !== null) {
      userStore.exists(user.uid).then((exists) => {
        if (!exists) {
          userStore.insert(user)
        }
      })

      setStep(2)
    }
  }, [userStore, user])

  const body = () => {
    switch (step) {
      case 1:
        return <SignIn onUserLoggedIn={setUser} />
      case 2:
        if (user) {
          return <AddonsSelection uid={user.uid} />
        } else {
          return (
            <div>
              <h1>Loading...</h1>
            </div>
          )
        }
      default:
        break
    }
  }

  return (
    <div className="app">
      <h1>Recap</h1>
      <p>Step {step} of 3</p>
      <div className="content">{body()}</div>
    </div>
  )
}

export default Onboarding
