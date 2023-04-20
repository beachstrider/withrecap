import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthGuard, AuthProvider, GoogleAuthProvider } from '@recap/shared'

import { INTEGRATIONS, MEETINGS, MEETING_DETAILS, PRIVACY_POLICY, TERMS_CONDITIONS } from './constants/routes'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'
import MeetingDetails from './pages/Meetings/Details'
import PrivacyPolicy from './pages/PrivacyPolicy'

import TermsConditions from './pages/TermsConditions'

export default function App() {
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
            <AuthGuard provider={GoogleAuthProvider}>
              <Meetings />
            </AuthGuard>
          }
        />
        <Route
          path={MEETING_DETAILS}
          element={
            <AuthGuard provider={GoogleAuthProvider}>
              <MeetingDetails />
            </AuthGuard>
          }
        />
        <Route
          path={INTEGRATIONS}
          element={
            <AuthGuard provider={GoogleAuthProvider}>
              <Integrations />
            </AuthGuard>
          }
        />
      </Routes>
    </>
  )
}
