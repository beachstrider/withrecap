import { AuthGuard, AuthProvider, GoogleIdentityAuthProvider } from '@recap/shared'
import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { AddonsSelection } from './pages/addons'
import { AutoSharing } from './pages/sharing'
import { SignIn } from './pages/signin'

import Layout from './components/Layout'
import { Done } from './pages/done'

export const ROUTES = {
  Login: '/1',
  Addon: '/2',
  Sharing: '/30',
  Done: '/3'
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
