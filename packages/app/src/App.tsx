import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Website from './pages'
import Home from './pages/Home'

import { AuthProvider } from './auth/AuthProvider'
import { HOME } from './constants/routes'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Website />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route path={HOME} element={<Home />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
