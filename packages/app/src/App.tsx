import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Website from './pages'
import Integrations from './pages/Integrations'
import Meetings from './pages/Meetings'

import { AuthProvider } from './auth/AuthProvider'
import { INTEGRATIONS, MEETINGS, MEETING_DETAIL } from './constants/routes'
import MeetingDetail from './pages/Meetings/Detail'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Website />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route path={MEETINGS} element={<Meetings />} />
          <Route path={MEETING_DETAIL} element={<MeetingDetail />} />
          <Route path={INTEGRATIONS} element={<Integrations />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
