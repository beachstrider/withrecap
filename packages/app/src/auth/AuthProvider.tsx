import { UserStore } from '@recap/shared'
import { User } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LoadingScreen } from '@recap/shared'
import { auth } from '../firebase'

type AuthContextType = {
  user: User
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuth = () => {
  return useContext(AuthContext)!
}

interface AuthProviderProps {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const userStore = useMemo(() => new UserStore(), [])
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u: any) => {
      if (u === null) {
        setUser(null)

        if (location.pathname !== '/') {
          navigate('/')
        }
      } else {
        userStore.exists(u.uid).then(async (exists) => {
          if (!exists) {
            await userStore.create(u)
          }

          if (!u.displayName) {
            // Sometimes display name is null, but it is in providerData, weird
            u.displayName = u.providerData[0].displayName
          }

          setUser(u)
        })
      }
    })

    return unsubscribe
  }, [userStore, location.pathname, navigate])

  if (!user) {
    return <LoadingScreen />
  }

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
