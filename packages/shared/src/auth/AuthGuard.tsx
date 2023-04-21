import { User } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { BaseAuthProvider } from '.'
import { UserStore } from '../storage/users'

type AuthGuardContextType = {
  token: string | null
  user: User
  error: Error | null
  logout: BaseAuthProvider['logout']
}
export const AuthGuardContext = createContext<AuthGuardContextType>({} as AuthGuardContextType)

export const useAuthGuard = () => {
  return useContext(AuthGuardContext)
}

interface AuthGuardProps {
  provider: new () => BaseAuthProvider
  children: JSX.Element
  onNeedAuth?: () => void
}

export const AuthGuard = ({ children, onNeedAuth, provider }: AuthGuardProps) => {
  const auth = useMemo(() => new provider(), [provider])
  const userStore = useMemo(() => new UserStore(), [])

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)

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
          if (!exists) {
            await userStore.create(u)
          }

          // Sometimes display name is null, but it is in providerData, weird
          const userData = { ...u }
          if (!userData.displayName) userData.displayName = u.providerData[0].displayName

          setUser(userData)
          setToken(t)
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
  }, [auth, userStore, onNeedAuth])

  if (!user) {
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
      {children}
    </AuthGuardContext.Provider>
  )
}
