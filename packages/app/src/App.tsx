import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'

import { AuthProvider } from './auth/AuthProvider'
import { INTEGRATIONS, MEETINGS, MEETING_DETAILS } from './constants/routes'
import MeetingDetails from './pages/Meetings/Details'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Website />} />
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
