import { useAuth } from '@recap/shared'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../App'

export const SignIn = () => {
  const { user, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      return navigate(ROUTES.Addon)
    }
  }, [user, navigate])

  return (
    <>
      <h1 className="text-2xl">Create your account</h1>
      <p>Continue with Google to get started.</p>
      <button onClick={login}>Sign In with Google</button>
      <p>Unlimited meeting notes for free!</p>
      <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
    </>
  )
}
