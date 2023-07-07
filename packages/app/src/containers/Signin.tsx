import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { LoadingScreen, toast, transferLogin, useAuth } from '@recap/shared'

import { MEETINGS } from '../constants/routes'

export default function Signin() {
  const { user, login, loading, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  useEffect(() => {
    if (!loading) {
      if (user) {
        transferLogin()
        navigate(MEETINGS)
      } else {
        login()
      }
    }
  }, [user, loading, login, navigate])

  return <LoadingScreen />
}
