import React, { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { GoogleAuth, UserStore } from '@recap/shared'

import logo from '../../assets/img/logo.svg'

import './popup.css'

const google = new GoogleAuth()
const users = new UserStore()

const redirect = () => {
  chrome.runtime.openOptionsPage()
}

const Popup = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    google.auth.onAuthStateChanged((u) => {
      if (u === null) {
        setUser(null)
        return redirect()
      }

      users.exists(u.uid).then((exists) => {
        if (!exists) {
          users.insert(u).then(() => {
            setUser(u)
          })
        } else {
          setUser(u)
        }
      })
    })
  }, [])

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Handle errors
    await google.login()
  }

  const logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Handle errors
    await google.logout()
  }

  const body = () => {
    if (!!user) {
      return (
        <div>
          <h1>Signed in as {user.email}.</h1>
          <button onClick={logout}>Sign Out?</button>
        </div>
      )
    } else {
      return (
        <>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <button onClick={login}>Sign In with Google</button>
        </>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {body()}
    </div>
  )
}

export default Popup
