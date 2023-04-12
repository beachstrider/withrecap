import React, { useEffect } from 'react'
import { FirebaseUser, useAuth } from '@recap/shared'

interface SignInProps {
  onUserLoggedIn: (user: FirebaseUser) => void
}

const SignIn = (props: SignInProps) => {
  const { user, login } = useAuth()

  useEffect(() => {
    if (user) {
      return props.onUserLoggedIn(user)
    }
  }, [user, props])

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
