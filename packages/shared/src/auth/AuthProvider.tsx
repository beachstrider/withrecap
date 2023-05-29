import * as Sentry from '@sentry/browser'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { BaseAuthProvider } from '.'
import { useErrors } from '../hooks/error'
import { User, UserStore } from '../storage/users'

type AuthProviderContextType = {
  token: string | null
  user: User | null
  loading: boolean
  error: ReturnType<typeof useErrors>['error']
  login: BaseAuthProvider['login']
  logout: BaseAuthProvider['logout']
  onAuthStateChanged: BaseAuthProvider['onAuthStateChanged']
  onRejected: () => void
}

export const AuthProviderContext = createContext<AuthProviderContextType>({} as AuthProviderContextType)

export const useAuth = () => {
  return useContext(AuthProviderContext)
}

interface AuthProviderProps {
  provider: new () => BaseAuthProvider
  children?: React.ReactNode
  onRejected: () => void
}

export const AuthProvider = ({ children, provider, onRejected }: AuthProviderProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { error, setError } = useErrors(null)

  const message = 'An error occurred while login'

  const login = async () => {
    try {
      await auth.login()
    } catch (err) {
      setError({ message, err: err as Error })
      onRejected()
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      if (u === null) {
        Sentry.setUser(null)

        setUser(null)
        setToken(null)
        setError(null)
        setLoading(false)

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
        })
        .catch(async (err) => {
          const message = 'An error occurred while authenticating'

          console.error(message, err)
          setError({ message, err })

          // If we cannot save the user info in the DB, we have to log the user out
          await auth.logout()
        })
        .finally(() => {
          setLoading(false)
        })
    })

    return unsubscribe
  }, [auth, userStore, setError])

  return (
    <AuthProviderContext.Provider
      value={{
        token,
        user,
        loading,
        error,
        login,
        logout: auth.logout,
        onRejected,
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
