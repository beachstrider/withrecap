import { AuthGuard, AuthProvider, GoogleAuthProvider, LoadingScreen } from '@recap/shared'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'
import MeetingDetails from './pages/Meetings/Details'
import PrivacyPolicy from './pages/PrivacyPolicy'

import NotFound from './pages/NotFound'
import TermsConditions from './pages/TermsConditions'

export default function App() {
  const navigate = useNavigate()

  const onNeedAuth = () => {
    return navigate('/')
  }

  const loadingComponent = <LoadingScreen />

  return (
    <>
      <Routes>
        {/* Website Routes */}
        <Route path="/">
          <Route
            index
            element={
              <AuthProvider provider={GoogleAuthProvider}>
                <Website />
              </AuthProvider>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <AuthProvider provider={GoogleAuthProvider}>
                <PrivacyPolicy />
              </AuthProvider>
            }
          />
          <Route
            path="terms-conditions"
            element={
              <AuthProvider provider={GoogleAuthProvider}>
                <TermsConditions />
              </AuthProvider>
            }
          />
        </Route>

        {/* App routes */}
        <Route path="/app/">
          <Route
            path="meetings"
            element={
              <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider} loadingComponent={loadingComponent}>
                <Meetings />
              </AuthGuard>
            }
          />
          <Route
            path="meetings/:mid"
            element={
              <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider} loadingComponent={loadingComponent}>
                <MeetingDetails />
              </AuthGuard>
            }
          />
          <Route
            path="integrations"
            element={
              <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider} loadingComponent={loadingComponent}>
                <Integrations />
              </AuthGuard>
            }
          />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
