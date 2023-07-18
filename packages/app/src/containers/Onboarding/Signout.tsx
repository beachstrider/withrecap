import React, { useCallback, useEffect } from 'react'

import { toast, useAuth } from '@recap/shared'

import OnboardingLayout from '../../components/layouts/Onboarding'

import { ONBOARDING_RESISTER } from '../../constants/routes'

export const OnboardingSignout = () => {
  const { logout, error } = useAuth()

  const handleLogout = useCallback(async () => {
    await logout()
    window.location.href = ONBOARDING_RESISTER
  }, [logout])

  useEffect(() => {
    handleLogout()
  }, [handleLogout])

  useEffect(() => {
    if (error) {
      toast.error('An error occurred while signing out', error)
    }
  }, [error])

  return <OnboardingLayout loading={true}></OnboardingLayout>
}
