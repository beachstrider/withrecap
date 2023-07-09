import React from 'react'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { AuthGuard, AuthProvider, GoogleAuthProvider, LoadingScreen } from '@recap/shared'

import Website from './containers'
import Addons from './containers/Addons'
import Meetings from './containers/Meetings'
import MeetingDetails from './containers/Meetings/Meeting'
import NotFound from './containers/NotFound'
import { OnboardingAddon } from './containers/Onboarding/Addon'
import { OnboardingDone } from './containers/Onboarding/Done'
import { OnboardingRegister } from './containers/Onboarding/Register'
import PrivacyPolicy from './containers/PrivacyPolicy'
import Signin from './containers/Signin'
import TermsConditions from './containers/TermsConditions'

export default function App() {
  const navigate = useNavigate()

  const onNeedAuth = () => {
    return navigate('/')
  }

  const loadingComponent = <LoadingScreen />

  const signin = (
    <AuthProvider provider={GoogleAuthProvider} onRejected={onNeedAuth}>
      <Signin />
    </AuthProvider>
  )

  const register = (
    <AuthProvider provider={GoogleAuthProvider} onRejected={onNeedAuth}>
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
