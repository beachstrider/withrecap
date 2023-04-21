import { AuthGuard, AuthProvider, GoogleAuthProvider } from '@recap/shared'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { INTEGRATIONS, MEETINGS, MEETING_DETAILS, PRIVACY_POLICY, TERMS_CONDITIONS } from './constants/routes'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'
import MeetingDetails from './pages/Meetings/Details'
import PrivacyPolicy from './pages/PrivacyPolicy'

import TermsConditions from './pages/TermsConditions'

export default function App() {
  const navigate = useNavigate()

  const onNeedAuth = () => {
    return navigate('/')
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={
            <AuthProvider provider={GoogleAuthProvider}>
              <Website />
            </AuthProvider>
          }
        />
        <Route
          path={PRIVACY_POLICY}
          element={
            <AuthProvider provider={GoogleAuthProvider}>
              <PrivacyPolicy />
            </AuthProvider>
          }
        />
        <Route
          path={TERMS_CONDITIONS}
          element={
            <AuthProvider provider={GoogleAuthProvider}>
              <TermsConditions />
            </AuthProvider>
          }
        />
        <Route
          path={MEETINGS}
          element={
            <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider}>
              <Meetings />
            </AuthGuard>
          }
        />
        <Route
          path={MEETING_DETAILS}
          element={
            <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider}>
              <MeetingDetails />
            </AuthGuard>
          }
        />
        <Route
          path={INTEGRATIONS}
          element={
            <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider}>
              <Integrations />
            </AuthGuard>
          }
        />
      </Routes>
    </>
  )
}
