import { toast, useAuth } from '@recap/shared'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import google from '../../../../assets/img/google.svg'
import { ROUTES } from '../../App'

export const SignIn = () => {
  const { user, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      return navigate(ROUTES.Addon)
    }
  }, [user, navigate])

  const signIn = async () => {
    try {
      await login()
    } catch (err) {
      toast.error('An error occurred while signing in', err)
    }
  }

  return (
    <>
      <h1 className="sm:mb-[16px] mb-[12px]">Create your account</h1>
      <p className="sm:text-[17px] text-[12px] sm:mb-[72px] mb-[54px] text-gray-500">
        Continue with Google to get started.
      </p>
      <button
        className="w-full rounded-[14px] bg-gray-100 flex justify-center items-center gap-[10px] sm:text-[15px] text-[12px] py-[14px] font-semibold sm:mb-[20px] mb-[15px]"
        onClick={signIn}
      >
        <img src={google} alt="" />
        Sign In with Google
      </button>
      <p className="sm:text-[16px] text-[12px] sm:mb-[72px] mb-[69px] text-center text-gray-500">
        Unlimited meeting notes for free!
      </p>
      <small className="text-center text-gray-500">
        By signing up, you agree to our Terms of Service
        <br />
        and Privacy Policy.
      </small>
    </>
  )
}
