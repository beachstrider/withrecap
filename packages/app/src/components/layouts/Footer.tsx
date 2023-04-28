import { toast, useAuth } from '@recap/shared'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import google from '../../assets/img/google.svg'
import logo from '../../assets/img/logo.svg'
import { SUPPORT_REQUEST } from '../../constants/links'
import { PRIVACY_POLICY, TERMS_CONDITIONS } from '../../constants/routes'
import { Button } from '../buttons'

export default function Index({ className = '' }) {
  const { loginWithPopup, error } = useAuth()

  const login = async () => {
    try {
      await loginWithPopup()
    } catch (error) {
      toast.error('An error occurred during login', error)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  return (
    <footer className={`container sm:py-[100px] py-[75px] ${className}`}>
      <div className="flex sm:flex-row flex-col gap-[40px] sm:justify-between">
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-[10px]">
          <Link className="flex gap-[10px] " to="/">
            <img src={logo} alt="" />
            <div className="text-[18px] font-bold">Recap</div>
          </Link>
          <div className="sm:ml-[42px] sm:text-[15px] text-[12px] text-gray-500">© 2023 System D Labs, LLC.</div>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-[20px] gap-[40px]">
          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[20px] gap-[15px]">
            <Link to={TERMS_CONDITIONS} className="block text-[15px] font-semibold text-gray-500">
              Terms and Conditions
            </Link>
            <Link to={PRIVACY_POLICY} className="block text-[15px] font-semibold text-gray-500">
              Privacy
            </Link>
            <Link target="_blank" to={SUPPORT_REQUEST} className="block text-[15px] font-semibold text-gray-500">
              Support
            </Link>
            <button onClick={login} className="block text-[15px] font-semibold text-gray-500 text-start">
              Sign in
            </button>
          </div>
          <Link to="#" className="sm:ml-[20px]">
            <Button>
              <img src={google} alt="" />
              Add to Chrome
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
