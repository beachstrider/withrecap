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
        <Route index element={<Website />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route path={MEETINGS} element={<Meetings />} />
          <Route path={MEETING_DETAILS} element={<MeetingDetails />} />
          <Route path={INTEGRATIONS} element={<Integrations />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
