import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { BaseAuthProvider } from '.'
import { useErrors } from '../hooks/error'
import { User, UserStore } from '../storage/users'

type AuthGuardContextType = {
  token: string | null
  user: User
  error: ReturnType<typeof useErrors>['error']
  logout: BaseAuthProvider['logout']
}
export const AuthGuardContext = createContext<AuthGuardContextType>({} as AuthGuardContextType)

export const useAuthGuard = () => {
  return useContext(AuthGuardContext)
}

interface AuthGuardProps {
  provider: new () => BaseAuthProvider
  children?: React.ReactNode
  loadingComponent?: React.ReactNode
  onNeedAuth?: () => void
}

export const AuthGuard = ({ children, loadingComponent, onNeedAuth, provider }: AuthGuardProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const { error, setError } = useErrors(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      if (u === null) {
        setUser(null)
        setToken(null)
        setError(null)

        onNeedAuth?.()

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
  }, [auth, userStore, onNeedAuth, setError])

  if (!user) {
    if (loadingComponent) return <>{loadingComponent}</>

    return null
  }

  return (
    <AuthGuardContext.Provider
      value={{
        token,
        user,
        error,
        logout: auth.logout
      }}
    >
      {children && children}
      {!children && <Outlet />}
    </AuthGuardContext.Provider>
  )
}
