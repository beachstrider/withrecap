import * as Sentry from '@sentry/browser'
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { User as AuthUser } from 'firebase/auth'
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
  onAfterAuth?: () => void
}

export const AuthGuard = ({ children, loadingComponent, onNeedAuth, onAfterAuth, provider }: AuthGuardProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const { error, setError } = useErrors(null)

  const _u = useRef<AuthUser | null | undefined>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u, t) => {
      // To prevent onAuthStateChanged triggered twice for some reason
      if (u === null && _u.current === null) return
      if (u !== null && u?.uid === _u.current?.uid) return

      _u.current = u

      if (u === null) {
        Sentry.setUser(null)

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
  }, [auth, userStore, onNeedAuth, onAfterAuth, setError])

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
      {/* If it is used as a parent component */}
      {children && children}
      {/* If it is used as an element prop of Route */}
      {!children && <Outlet />}
    </AuthGuardContext.Provider>
  )
}
