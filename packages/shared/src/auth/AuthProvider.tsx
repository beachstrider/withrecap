import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { User } from 'firebase/auth'

import { UserStore } from '../storage/users'
import { BaseAuthProvider } from '.'

type AuthProviderContextType = {
  token: string | null
  user: User | null
  error: Error | null
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
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      if (u === null || t === null) {
        setUser(null)
        setToken(null)
        setError(null)
        return
      }

      userStore
        .exists(u.uid)
        .then(async (exists) => {
          if (!exists) {
            await userStore.create(u)
            setUser(u)
            setToken(t)
          } else {
            setUser(u)
            setToken(t)
          }

          setError(null)
        })
        .catch(async (err) => {
          const message = 'An error occurred while authenticating'

          console.error(message, err)
          setError(new Error(message))

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
        error,
        login: auth.login,
        logout: auth.logout,
        onAuthStateChanged: auth.onAuthStateChanged
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  )
}
