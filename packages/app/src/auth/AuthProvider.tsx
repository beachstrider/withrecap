import { UserStore } from '@recap/shared'
import { User } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Loading from '../components/layouts/Loading'
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

          setUser(u)
        })
      }
    })

    return unsubscribe
  }, [userStore, location.pathname, navigate])

  if (!user) {
    return <Loading />
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
