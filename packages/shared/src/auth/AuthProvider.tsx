import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { BaseAuthProvider } from '.'
import { useErrors } from '../hooks/error'
import { User, UserStore } from '../storage/users'

type AuthProviderContextType = {
  token: string | null
  user: User | null
  error: ReturnType<typeof useErrors>['error']
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
  children?: React.ReactNode
}

export const AuthProvider = ({ children, provider }: AuthProviderProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const { error, setError } = useErrors(null)

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
          let user: User

          if (!exists) {
            user = await userStore.create(u)
          } else {
            user = await userStore.get(u.uid)
          }

          setUser(user)
          setToken(t)
          setError(null)
        })
        .catch(async (err) => {
          const message = 'An error occurred while authenticating'

          console.error(message, err)
          setError({ message, err })

          // If we cannot save the user info in the DB, we have to log the user out
          await auth.logout()
        })
    })

    return unsubscribe
  }, [auth, userStore, setError])

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
      {children && children}
      {!children && <Outlet />}
    </AuthProviderContext.Provider>
  )
}
