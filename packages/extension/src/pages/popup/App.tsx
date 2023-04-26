import { AuthGuard, GoogleIdentityAuthProvider, LoadingIcon } from '@recap/shared'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

import { ErrorBoundary } from './components/ErrorBoundary'
import Popup from './pages/popup'

const loadingComponent = (
  <Layout>
    <div className="flex items-center justify-center flex-1">
      <LoadingIcon />
    </div>
  </Layout>
)

export const App = () => {
  const onNeedAuth = () => {
    return chrome.runtime.openOptionsPage()
  }

  return (
    <ErrorBoundary>
      <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleIdentityAuthProvider} loadingComponent={loadingComponent}>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route path="*" element={<Popup />} />
          </Route>
        </Routes>
      </AuthGuard>
    </ErrorBoundary>
  )
}
