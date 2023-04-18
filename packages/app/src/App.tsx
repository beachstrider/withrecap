import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'

import { AuthProvider } from './auth/AuthProvider'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Website />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
