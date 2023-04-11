import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@recap/shared'

import Layout from './components/Layout'
import Popup from './pages/popup'

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<Popup />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
