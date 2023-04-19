import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { INTEGRATIONS, MEETINGS, MEETING_DETAILS, PRIVACY_POLICY, TERMS_CONDITIONS } from './constants/routes'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'
import MeetingDetails from './pages/Meetings/Details'
import PrivacyPolicy from './pages/PrivacyPolicy'

import { AuthProvider } from './auth/AuthProvider'
import TermsConditions from './pages/TermsConditions'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Website />} />
        <Route path={PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={TERMS_CONDITIONS} element={<TermsConditions />} />
        <Route
          path={MEETINGS}
          element={
            <AuthProvider>
              <Meetings />
            </AuthProvider>
          }
        />
        <Route
          path={MEETING_DETAILS}
          element={
            <AuthProvider>
              <MeetingDetails />
            </AuthProvider>
          }
        />
        <Route
          path={INTEGRATIONS}
          element={
            <AuthProvider>
              <Integrations />
            </AuthProvider>
          }
        />
      </Routes>
    </>
  )
}
