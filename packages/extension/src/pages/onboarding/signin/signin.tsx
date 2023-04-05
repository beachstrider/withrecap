import React, { useEffect, useMemo } from 'react'
import { GoogleAuth, FirebaseUser } from '@recap/shared'

interface SignInProps {
  onUserLoggedIn: (user: FirebaseUser) => void
}

const SignIn = (props: SignInProps) => {
  const google = useMemo(() => new GoogleAuth(), [])

  useEffect(() => {
    google.onAuthStateChanged((user) => {
      if (user !== null) {
        return props.onUserLoggedIn(user)
      }
    })
  }, [google, props])

  const login = async () => {
    // TODO: Handle errors
    await google.login()
  }

  return (
    <>
      <h1>Create your account</h1>
      <p>Continue with Google to get started.</p>
      <button onClick={login}>Sign In with Google</button>
      <p>Unlimited meeting notes for free!</p>
      <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
    </>
  )
}

export default SignIn
