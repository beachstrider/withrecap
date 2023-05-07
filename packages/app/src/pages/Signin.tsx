import { toast, useAuth } from '@recap/shared'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { createAuthToken } from '@recap/shared/src/functions'
import { MEETINGS } from '../constants/routes'

export default function Signin() {
  const { onAuthStateChanged, loginWithPopup, error } = useAuth()
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
    // If user already logged in we redirect to meetings page
    const unsubscribe = onAuthStateChanged(async (u: any) => {
      if (u !== null) {
        // Sync auth
        const {
          data: { token }
        } = (await createAuthToken()) as { data: { token: string } }

        // TODO: extensionId needs to be dynamically allocated to each user when they are done installing extension
        await chrome.runtime.sendMessage('hnendcllllmefheblfoibkijaimbppmd', { token })
        navigate(MEETINGS)
      }
    })

    return unsubscribe
  }, [navigate, onAuthStateChanged])

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button onClick={login} className="google-login-button"></button>
    </div>
  )
}
