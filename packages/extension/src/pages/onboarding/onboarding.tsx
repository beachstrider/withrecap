import React, { useMemo, useState } from 'react'
import { UserStore, User, FirebaseUser, AuthProvider, GoogleIdentityAuthProvider } from '@recap/shared'

import AddonsSelection from './addons/addons'
import SignIn from './signin/signin'

import './onboarding.css'
import AutoSharing from './sharing/sharing'

const Onboarding = () => {
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [step, setStep] = useState<number>(1)

  const onUserLoggedIn = (user: FirebaseUser) => {
    userStore.exists(user.uid).then(async (exists) => {
      if (!exists) {
        await userStore.create({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        })
      }
      userStore.get(user.uid).then(setUser)
    })

    setStep(2)
  }

  const loading = () => (
    <>
      <h1>Loading...</h1>
    </>
  )

  const body = () => {
    switch (step) {
      case 1:
        return (
          <AuthProvider provider={GoogleIdentityAuthProvider}>
            <SignIn onUserLoggedIn={onUserLoggedIn} />
          </AuthProvider>
        )
      case 2:
        if (user) {
          return <AddonsSelection uid={user.uid} onNext={() => setStep(step + 1)} />
        }
        return loading()
      case 3:
        if (user) {
          return <AutoSharing uid={user.uid} onNext={() => setStep(step + 1)} />
        }
        return loading()
      case 4:
        return <h1>Pin Recap to Chrome for the best experience</h1>
      default:
        return null
    }
  }

  return (
    <div className="app">
      <h1>Recap</h1>
      <p>Step {step} of 4</p>
      <AuthProvider provider={GoogleIdentityAuthProvider}>
        <div className="content">{body()}</div>
      </AuthProvider>
    </div>
  )
}

export default Onboarding
