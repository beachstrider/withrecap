import React from 'react'

import { Link } from 'react-router-dom'

import { SUPPORT_REQUEST } from '../../constants/links'
import { PRIVACY_POLICY, SIGNIN, TERMS_CONDITIONS } from '../../constants/routes'

import google from '../../assets/img/google.svg'
import logo from '../../assets/img/logo.svg'

import { Button } from '../buttons'

export default function Index({ className = '' }) {
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
            <Link to={SIGNIN} className="flex items-center gap-2 h-[38px] text-sm px-[11px] font-semibold">
              <img src={google} alt="" />
              Sign in with Google
            </Link>
          </div>
          <a href={process.env.EXTENSION_LINK} className="sm:ml-[20px]" rel="noreferrer">
            <Button>
              <img src={google} alt="" />
              Add to Chrome
            </Button>
          </a>
        </div>
      </div>
    </footer>
  )
}
