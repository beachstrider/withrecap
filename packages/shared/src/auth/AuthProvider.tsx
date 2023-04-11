import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { User } from 'firebase/auth'

import { GoogleAuth } from './google'
import { UserStore } from '../storage/users'

type AuthContextType = {
  token: string
  user: User
}
const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  return useContext(AuthContext)!
}

interface AuthProviderProps {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const google = useMemo(() => new GoogleAuth(), [])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    google.onAuthStateChanged((u, t) => {
      if (u === null || t === null) {
        setUser(null)
        setToken(null)
        return chrome.runtime.openOptionsPage()
      }

      userStore.exists(u.uid).then((exists) => {
        if (!exists) {
          userStore.create(u).then(() => {
            setUser(u)
            setToken(t)
          })
        } else {
          setUser(u)
          setToken(t)
        }
      })
    })
  }, [google, userStore])

  if (!user || !token) {
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
