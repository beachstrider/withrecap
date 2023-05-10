import { toast, useAuth } from '@recap/shared'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { MEETINGS } from '../constants/routes'

export default function Signin() {
  const { user, login, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  useEffect(() => {
    if (user) {
      navigate(MEETINGS)
    }
  }, [user, navigate])

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button onClick={login} className="google-login-button"></button>
    </div>
  )
}
