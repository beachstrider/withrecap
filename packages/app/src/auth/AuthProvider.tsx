import { UserStore } from '@recap/shared'
import { User } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Loading from '../components/layouts/Loading'
import { auth } from '../firebase'

type AuthContextType = {
  user: User | null
  loading: boolean
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
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u: any) => {
      if (u === null) {
        setUser(null)

        if (location.pathname !== '/') navigate('/')
      } else {
        userStore.exists(u.uid).then((exists) => {
          if (!exists) {
            console.debug('user must install an extension')
            setUser(u)
          } else {
            console.debug('u.uid exist')
            setUser(u)
          }
        })
      }

      setLoading(false)
    })

    return unsubscribe
  }, [auth, userStore])

  if (!user && location.pathname !== '/') return <Loading />

  console.debug('u==', user)
  return (
    <AuthContext.Provider
      value={{
        user,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
