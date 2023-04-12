import React from 'react'
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { AuthGuard, AuthProvider, GoogleIdentityAuthProvider } from '@recap/shared'

import { SignIn } from './pages/signin'
import { AddonsSelection } from './pages/addons'
import { AutoSharing } from './pages/sharing'

import Layout from './components/Layout'
import { Done } from './pages/done'

export const ROUTES = {
  Login: '/1',
  Addon: '/2',
  Sharing: '/3',
  Done: '/4'
}

const provider = GoogleIdentityAuthProvider

export const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onNeedAuth = () => {
    if (location.pathname !== ROUTES.Login) {
      return navigate(ROUTES.Login)
    }
  }

  // TODO: Could probably be refactored
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={ROUTES.Login} />} />
        <Route
          path={ROUTES.Login}
          element={
            <AuthProvider provider={provider}>
              <SignIn />
            </AuthProvider>
          }
        />
        <Route
          path={ROUTES.Addon}
          element={
            <AuthGuard onNeedAuth={onNeedAuth} provider={provider}>
              <AddonsSelection />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTES.Sharing}
          element={
            <AuthGuard onNeedAuth={onNeedAuth} provider={provider}>
              <AutoSharing />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTES.Done}
          element={
            <AuthGuard onNeedAuth={onNeedAuth} provider={provider}>
              <Done />
            </AuthGuard>
          }
        />
      </Route>
    </Routes>
  )
}
