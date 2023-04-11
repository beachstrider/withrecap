import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { auth } from './firebase'
import { Auth, useSetStore } from './store'

import Loading from './components/layouts/Loading'
import Home from './pages/Home'
import PublicHome from './pages/index'

import maxwellImage from './assets/img/maxwell.png'

export default function App() {
  const [_, setAuth] = useSetStore(Auth)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u === null) {
        console.log('not authed.')
      } else {
        console.log('authed.')
      }
      // mock initializing auth
      setAuth({
        user: {
          uid: '48HBJDPh7HhVBcGIZSQHoO5mnGG2',
          name: 'Maxwell',
          email: 'maxwell@example.com',
          image: maxwellImage
        }
      })

      setLoading(false)
    })

    return unsubscribe
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <Routes>
      <Route index element={<PublicHome />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}
