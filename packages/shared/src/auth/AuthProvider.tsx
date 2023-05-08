import * as Sentry from '@sentry/browser'
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
  loginWithPopup: BaseAuthProvider['loginWithPopup']
  logout: BaseAuthProvider['logout']
  onAuthStateChanged: BaseAuthProvider['onAuthStateChanged']
}
export const AuthProviderContext = createContext<AuthProviderContextType>({} as AuthProviderContextType)

export const useAuth = () => {
  return useContext(AuthProviderContext)
}

interface AuthProviderProps {
  provider: new () => BaseAuthProvider
  onAfterAuth?: () => void
  children?: React.ReactNode
}

export const AuthProvider = ({ children, provider, onAfterAuth }: AuthProviderProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const { error, setError } = useErrors(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      if (u === null) {
        Sentry.setUser(null)

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
            await userStore.update(u.uid, { displayName: u.displayName || '', photoURL: u.photoURL || '' })

            user = await userStore.get(u.uid)
          }

          Sentry.setUser({
            id: user.uid,
            email: user.email
          })

          setUser(user)
          setToken(t)
          setError(null)

          onAfterAuth?.()
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
  }, [auth, userStore, setError, onAfterAuth])

  return (
    <AuthProviderContext.Provider
      value={{
        token,
        user,
        error,
        login: auth.login,
        loginWithPopup: auth.loginWithPopup,
        logout: auth.logout,
        onAuthStateChanged: auth.onAuthStateChanged
      }}
    >
      {/* If it is used as a parent component */}
      {children && children}
      {/* If it is used as an element prop of Route */}
      {!children && <Outlet />}
    </AuthProviderContext.Provider>
  )
}
