import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthGuard, GoogleIdentityAuthProvider } from '@recap/shared'

import Layout from './components/Layout'

import Popup from './pages/popup'
import { ErrorBoundary } from './components/ErrorBoundary'

export const App = () => {
  const onNeedAuth = () => {
    return chrome.runtime.openOptionsPage()
  }

  return (
    <ErrorBoundary>
      <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleIdentityAuthProvider}>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route path="*" element={<Popup />} />
          </Route>
        </Routes>
      </AuthGuard>
    </ErrorBoundary>
  )
}
