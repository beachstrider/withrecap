import { AuthGuard, AuthProvider, GoogleIdentityAuthProvider } from '@recap/shared'
import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { AddonsSelection } from './pages/addons'
import { AutoSharing } from './pages/sharing'

import Layout from './components/Layout'
import { Done } from './pages/done'
import { SignIn } from './pages/signin'

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

  const signin = (
    <AuthProvider provider={provider}>
      <SignIn />
    </AuthProvider>
  )

  const authGuard = <AuthGuard onNeedAuth={onNeedAuth} provider={provider} />

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.Login} />} />
        <Route path={ROUTES.Login} element={signin} />
        <Route element={authGuard}>
          <Route path={ROUTES.Addon} element={<AddonsSelection />} />
          <Route path={ROUTES.Sharing} element={<AutoSharing />} />
          <Route path={ROUTES.Done} element={<Done />} />
        </Route>
      </Routes>
    </Layout>
  )
}
