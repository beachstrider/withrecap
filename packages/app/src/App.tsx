import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Website from './pages'
import Home from './pages/Home'
import Signin from './pages/Signin'

import { AuthProvider } from './auth/AuthProvider'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Website />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
