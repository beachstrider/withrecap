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
const AuthContext = createContext<AuthContextType | null>(null)

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

        if (location.pathname !== '/') navigate('/signin')
      } else {
        userStore.exists(u.uid).then((exists) => {
          console.log('.....')
          if (!exists) {
            console.info('user must install an extension')
            setUser(u)
          } else {
            console.log('u.uid exist')
            setUser(u)
          }
        })
      }

      setLoading(false)
    })

    return unsubscribe
  }, [auth, userStore])

  if (!user && location.pathname !== '/signin') return <Loading />

  console.log('u==', user)
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
