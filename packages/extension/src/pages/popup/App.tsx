import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { AuthGuard, GoogleIdentityAuthProvider, LoadingIcon } from '@recap/shared'

import { Layout } from './components/Layout'

import Popup from './pages/popup'

const loadingComponent = (
  <div className="flex items-center justify-center flex-1">
    <LoadingIcon />
  </div>
)

export const App = () => {
  const onNeedAuth = async () => {
    const url = `${process.env.DOMAIN}/onboarding/register`

    await chrome.tabs.create({ url })
  }

  return (
    <Layout>
      <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleIdentityAuthProvider} loadingComponent={loadingComponent}>
        <Routes>
          <Route path="*" element={<Popup />} />
        </Routes>
      </AuthGuard>
    </Layout>
  )
}
