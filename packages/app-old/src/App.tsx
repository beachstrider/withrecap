import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import * as firebaseui from 'firebaseui'
import { GoogleAuthProvider, User, getAuth, Config } from 'firebase/auth'
import { FirebaseOptions, initializeApp } from 'firebase/app'
import 'firebase/compat/auth'

import './App.css'

// TODO: Put this in env
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyD4E94nsyAL--9HTl8mdey5vNM5g41Sqds',
  authDomain: 'recap-dev-3c341.firebaseapp.com',
  projectId: 'recap-dev-3c341',
  storageBucket: 'recap-dev-3c341.appspot.com',
  messagingSenderId: '920065143357',
  appId: '1:920065143357:web:d6bf33c14c8cd073cbb054'
}

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)

// Configure FirebaseUI.
const uiConfig: firebaseui.auth.Config = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/onboarding.html',
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],

  callbacks: {
    signInSuccessWithAuthResult(authResult, _redirectUrl) {
      // TODO: This is really unsafe!
      localStorage.setItem('recap/authResult', JSON.stringify(authResult))

      return true
    }
  }
}

const SignInScreen = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u === null) {
        setUser(null)
      }

      setUser(u)
    })
  })

  const body = () => {
    if (!!user) {
      return (
        <div>
          <h1>Signed in as {user.email}.</h1>
          <button onClick={auth.signOut.bind(auth)}>Sign Out?</button>
        </div>
      )
    } else {
      return (
        <>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </>
      )
    }
  }

  return (
    <div>
      <h1>My App</h1>
      {body()}
    </div>
  )
}

export default SignInScreen
