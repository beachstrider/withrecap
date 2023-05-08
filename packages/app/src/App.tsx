import { AuthGuard, AuthProvider, GoogleAuthProvider, LoadingScreen } from '@recap/shared'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Website from './pages'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Signin from './pages/Signin'
import TermsConditions from './pages/TermsConditions'

import Addons from './pages/Addons'
import Meetings from './pages/Meetings'
import MeetingDetails from './pages/Meetings/Details'

import NotFound from './pages/NotFound'
import { OnboardingAddon } from './pages/Onboarding/Addon'
import { OnboardingDone } from './pages/Onboarding/Done'
import { OnboardingRegister } from './pages/Onboarding/Register'

export default function App() {
  const navigate = useNavigate()

  const onNeedAuth = () => {
    return navigate('/')
  }

  const loadingComponent = <LoadingScreen />

  const signin = (
    <AuthProvider provider={GoogleAuthProvider}>
      <Signin />
    </AuthProvider>
  )

  const register = (
    <AuthProvider provider={GoogleAuthProvider}>
      <OnboardingRegister />
    </AuthProvider>
  )

  const authGuard = (
    <AuthGuard onNeedAuth={onNeedAuth} provider={GoogleAuthProvider} loadingComponent={loadingComponent} />
  )

  return (
    <>
      <Routes>
        {/* Website routes */}
        <Route path="/">
          <Route index element={<Website />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
        </Route>

        {/* Auth routes */}
        <Route path="/signin" element={signin} />

        {/* Onboarding */}
        <Route path="/onboarding/register" element={register} />
        <Route path="/onboarding/" element={authGuard}>
          <Route path="addon" element={<OnboardingAddon />} />
          <Route path="done" element={<OnboardingDone />} />
        </Route>

        {/* App routes */}
        <Route path="/app/" element={authGuard}>
          <Route path="meetings" element={<Meetings />} />
          <Route path="meetings/:mid" element={<MeetingDetails />} />
          <Route path="addons" element={<Addons />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
