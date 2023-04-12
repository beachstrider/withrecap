import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { User } from 'firebase/auth'

import { UserStore } from '../storage/users'
import { BaseAuthProvider } from '.'

type AuthGuardContextType = {
  token: string
  user: User
}
export const AuthGuardContext = createContext<AuthGuardContextType>({} as AuthGuardContextType)

export const useAuthGuard = () => {
  return useContext(AuthGuardContext)
}

interface AuthGuardProps {
  provider: new () => BaseAuthProvider
  children: JSX.Element
  onNeedAuth: () => void
}

export const AuthGuard = ({ children, onNeedAuth, provider }: AuthGuardProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      if (u === null || t === null) {
        setUser(null)
        setToken(null)
        return onNeedAuth()
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

    return unsubscribe
  }, [auth, userStore, onNeedAuth])

  if (!user || !token) {
    return null
  }

  return (
    <AuthGuardContext.Provider
      value={{
        token,
        user
      }}
    >
      {children}
    </AuthGuardContext.Provider>
  )
}
