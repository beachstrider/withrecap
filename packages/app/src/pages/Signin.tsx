import { GoogleAuthProvider, User } from 'firebase/auth'
import * as firebaseui from 'firebaseui'
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'

// Configure FirebaseUI.
const uiConfig: firebaseui.auth.Config = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],

  callbacks: {
    signInSuccessWithAuthResult(authResult, _redirectUrl) {
      return true
    }
  }
}

export default function Index() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u === null) {
        setUser(null)
      }

      setUser(u)
    })
  })

  if (!!user) {
    return <Navigate to="/home" />
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  )
}
