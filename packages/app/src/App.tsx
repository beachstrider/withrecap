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

  const authProvider = <AuthProvider provider={GoogleAuthProvider} />

  const authGuard = (
    <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider} loadingComponent={loadingComponent} />
  )

  return (
    <>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={authProvider}>
          <Route index element={<Website />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
        </Route>

        {/* App routes */}
        <Route path="/app/" element={authGuard}>
          <Route path="meetings" element={<Meetings />} />
          <Route path="meetings/:mid" element={<MeetingDetails />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
