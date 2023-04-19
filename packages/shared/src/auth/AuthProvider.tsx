import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { User } from 'firebase/auth'

import { UserStore } from '../storage/users'
import { BaseAuthProvider } from '.'
import { toast } from '../components/toast'

type AuthProviderContextType = {
  token: string | null
  user: User | null
  login: BaseAuthProvider['login']
  logout: BaseAuthProvider['logout']
  onAuthStateChanged: BaseAuthProvider['onAuthStateChanged']
}
export const AuthProviderContext = createContext<AuthProviderContextType>({} as AuthProviderContextType)

export const useAuth = () => {
  return useContext(AuthProviderContext)
}

interface AuthProviderProps {
  provider: new () => BaseAuthProvider
  children: JSX.Element
}

export const AuthProvider = ({ children, provider }: AuthProviderProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      if (u === null || t === null) {
        setUser(null)
        setToken(null)
        return
      }

      userStore
        .exists(u.uid)
        .then((exists) => {
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
        .catch(async (err) => {
          toast.error('An error occurred while authenticating', err)
          // If we cannot save the user info in the DB, we have to log the user out
          await auth.logout()
        })
    })

    return unsubscribe
  }, [auth, userStore])

  return (
    <AuthProviderContext.Provider
      value={{
        token,
        user,
        login: auth.login,
        logout: auth.logout,
        onAuthStateChanged: auth.onAuthStateChanged
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  )
}
