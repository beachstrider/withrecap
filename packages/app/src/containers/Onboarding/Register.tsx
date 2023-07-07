import React, { useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { toast, transferLogin, useAuth } from '@recap/shared'

import OnboardingLayout from '../../components/layouts/Onboarding'

import { ONBOARDING_ADDON, PRIVACY_POLICY, TERMS_CONDITIONS } from '../../constants/routes'

import google from '../../assets/img/google.svg'

export const OnboardingRegister = () => {
  const { user, loading, login, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      transferLogin()
      navigate(ONBOARDING_ADDON)
    }
  }, [user, navigate])

  useEffect(() => {
    if (error) {
      toast.error('An error occurred while authenticating', error)
    }
  }, [error])

  return (
    <OnboardingLayout step={1} loading={loading}>
      <h2 className="font-semibold sm:mb-[16px] mb-[12px]">Create your account</h2>
      <p className="sm:text-[17px] text-[12px] sm:mb-[72px] mb-[54px] text-gray-500">
        Continue with Google to get started.
      </p>
      <button
        className="w-full rounded-[14px] bg-gray-100 flex justify-center items-center gap-[10px] sm:text-[15px] text-[12px] py-[14px] font-semibold sm:mb-[20px] mb-[15px]"
        onClick={login}
      >
        <img src={google} alt="" />
        Sign In with Google
      </button>
      <p className="sm:text-[16px] text-[12px] sm:mb-[72px] mb-[69px] text-center text-gray-500">
        Unlimited meeting notes for free!
      </p>
      <small className="block w-full text-center text-gray-500">
        By signing up, you agree to our{' '}
        <Link to={TERMS_CONDITIONS} target="_blank" className="cursor-pointer">
          Terms of Service
        </Link>
        <br />
        and{' '}
        <Link to={PRIVACY_POLICY} target="_blank" className="cursor-pointer">
          Privacy Policy
        </Link>
        .
      </small>
    </OnboardingLayout>
  )
}
