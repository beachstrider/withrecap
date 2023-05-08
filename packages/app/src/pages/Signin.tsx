import { shareLogin, toast, useAuth } from '@recap/shared'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { MEETINGS } from '../constants/routes'

export default function Signin() {
  const { user, loginWithPopup, error } = useAuth()
  const navigate = useNavigate()

  const login = async () => {
    try {
      await loginWithPopup?.()
    } catch (error) {
      toast.error('An error occurred during login', error)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  useEffect(() => {
    if (user) {
      // TODO: if res is true, set isInstalled true globally
      shareLogin().then(console.debug)

      navigate(MEETINGS)
    }
  }, [user, navigate])

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button onClick={login} className="google-login-button"></button>
    </div>
  )
}
