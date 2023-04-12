import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from '@headlessui/react'
import { useAuth } from '../../auth/AuthProvider'

import Badge from '../display/Badge'
import Switch from '../inputs/Switch'

import arrowRight from '../../assets/img/arrowRight.svg'
import danger from '../../assets/img/danger.svg'
import google from '../../assets/img/google.png'
import logo from '../../assets/img/logo.svg'
import outbound from '../../assets/img/outbound.svg'
import paperPlan from '../../assets/img/paperPlan.svg'
import question from '../../assets/img/question.svg'

export default function Index({ isPublic = false }) {
  const { user } = useAuth() ?? {}

  const [automaticSharing, setAutomaticSharing] = useState(false)

  return (
    <header className="container py-[18px]">
      <div className="flex justify-between">
        <Link className="flex gap-[10px] items-center" to="/">
          <img src={logo} alt="" />
          <div className="text-[18px] font-bold">Recap</div>
        </Link>
        {!isPublic && (
          <>
            <div className="sm:flex hidden items-center gap-[18px]">
              <Badge>Past Meetings</Badge>
              <div className="px-[10px] py-[6px] font-semibold text-gray-500">Integrations</div>
            </div>
            <div className="relative">
              <Menu>
                <Menu.Button className="flex items-center gap-[10px]">
                  <img src={`${user?.photoURL}`} alt="" className="w-[32px] h-[32px] rounded-full" />
                  <div className="font-semibold rounded-full">{user?.providerData[0]?.displayName?.split(' ')[0]}</div>
                </Menu.Button>
                <Menu.Items className="absolute flex flex-col mt-[28px] menu-shadow p-[20px] w-[300px] right-0 text-[13px] bg-white">
                  <div className="mb-[20px]">
                    <div className="flex justify-between items-center mb-[8px]">
                      <div className="flex gap-[10px] grow">
                        <img src={paperPlan} alt="" className="w-[20px] h-[20px]" />
                        <div className="font-semibold text-[15px]">Automatic Sharing</div>
                      </div>
                      <div>
                        <Switch checked={automaticSharing} onClick={() => setAutomaticSharing(!automaticSharing)} />
                      </div>
                    </div>
                    <div className="text-gray-500">
                      Recap will automatically send meeting notes to all participants after each meeting.
                    </div>
                  </div>
                  <div className="mb-[20px]">
                    <Link to="#" className="flex justify-between items-center">
                      <div className="flex gap-[10px] grow">
                        <img src={question} alt="" className="w-[20px] h-[20px]" />
                        <div className="font-semibold text-[15px]">Support</div>
                      </div>
                      <img src={outbound} alt="" />
                    </Link>
                  </div>
                  <div className="mb-[20px]">
                    <button onClick={() => false} className="flex justify-between items-center">
                      <div className="flex gap-[10px] grow">
                        <img src={arrowRight} alt="" className="w-[20px] h-[20px]" />
                        <div className="font-semibold text-[15px]">Sign Out</div>
                      </div>
                      <img src={outbound} alt="" />
                    </button>
                  </div>
                  <div className="flex w-full mb-[20px] border-t border-solid border-gray-100"></div>
                  <div className="">
                    <Link to="#" className="flex justify-between items-center">
                      <div className="flex gap-[10px] grow">
                        <img src={danger} alt="" className="w-[20px] h-[20px]" />
                        <div className="font-semibold text-[15px] text-[#F12858]">Delete Account</div>
                      </div>
                    </Link>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </>
        )}
        {isPublic && (
          <div className="flex items-center sm:gap-[20px] gap-[15px]">
            <Link to="/signin" className="text-[15px] font-semibold text-gray-500">
              Sign in
            </Link>
            <Link to="#">
              <Badge>
                <img src={google} alt="" />
                Add to Chrome
              </Badge>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
