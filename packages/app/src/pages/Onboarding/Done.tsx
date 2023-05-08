import React from 'react'
import { Link } from 'react-router-dom'

import OnboardingLayout from '../../components/layouts/Onboarding'
import { MEETINGS } from '../../constants/routes'

import back from '../../assets/img/back_dark.svg'
import close from '../../assets/img/closeDark.svg'
import forward from '../../assets/img/forward_dark.svg'
import google from '../../assets/img/google.svg'
import house from '../../assets/img/house.svg'
import lock from '../../assets/img/lock_dark.svg'
import navRightUser3dots from '../../assets/img/nav-right-user-3dots.png'
import plus from '../../assets/img/plus_dark.svg'
import refresh from '../../assets/img/refresh_dark.svg'
import star from '../../assets/img/star.svg'

export const OnboardingDone = () => {
  return (
    <OnboardingLayout step={3}>
      <h2 className="font-semibold sm:mb-[64px] mb-[48px]">Pin Recap to Chrome for the best experience</h2>
      <div className="flex justify-center w-full sm:mb-[64px] mb-[48px]">
        <div
          className="relative max-w-[1288px] w-[125%] sm:scale-100 scale-[0.8]"
          style={{
            filter:
              'drop-shadow(0px 2.28926px 9.15703px rgba(0, 0, 0, 0.01)) drop-shadow(0px 0px 4.57851px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2.28926px 25.1818px rgba(0, 0, 0, 0.04))'
          }}
        >
          <div className="">
            <div className="rounded-t-[9px] overflow-hidden flex bg-white">
              <div className="bg-[#DEE1E6] pl-[15px] pr-[17px] pt-[18px] pb-[16px] flex gap-[9px] rounded-br-[9px]">
                <div className="rounded-full w-[14px] h-[14px] bg-[#FF6058] border-solid border-[#E14942]"></div>
                <div className="rounded-full w-[14px] h-[14px] bg-[#FFC130] border-solid border-[#E1A325]"></div>
                <div className="rounded-full w-[14px] h-[14px] bg-[#27CA40] border-solid border-[#3EAF3F]"></div>
              </div>
              <div className="flex items-end bg-[#DEE1E6] pt-[9px]">
                <div className="rounded-t-[9px] pl-[9px] pr-[15px] py-[11.4px] flex items-center justify-between text-[13.7px] bg-white text-[#494C4F] w-[178px]">
                  <div className="truncate leading-[16px] flex items-center gap-[10px]">
                    <img src={google} alt="" className="w-[15px] h-[15px]" />
                    Google
                  </div>
                  <img src={close} alt="" className="ml-[8px]" />
                </div>
              </div>
              <div className="bg-[#DEE1E6] px-[20px] flex items-center rounded-bl-[9px] grow">
                <img src={plus} alt="" className="pt-[10px]" />
              </div>
            </div>
            <div className="px-[16px] py-[5.5px] flex items-center bg-white border-solid border-b-[2px] border-gray-300">
              <img src={back} alt="" className="mr-[21px]" />
              <img src={forward} alt="" className="mr-[21px]" />
              <img src={refresh} alt="" className="mr-[21px]" />
              <img src={house} alt="" className="mr-[17px]" />
              <div className="bg-[#F1F3F4] rounded-[24px] grow flex items-center h-[32px] w-[330px]">
                <div className="flex justify-center items-center w-[36px]">
                  <img src={lock} alt="" />
                </div>
                <div className="grow text-[16px] leading-[18px] text-[#202124]">
                  google.com
                  <span className="text-[#696A6C]">/search</span>
                </div>
                <div className="flex justify-center items-center w-[36px]">
                  <img src={star} alt="" />
                </div>
              </div>
              <div className="flex items-center ml-[18px]">
                <img src={navRightUser3dots} className="h-[25px]" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 sm:bg-white rounded-b-[9px] h-[185px]"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to={MEETINGS}
          className={`px-[14px] py-[10px] rounded-[14px] sm:text-[15px] text-[12px] font-semibold bg-gray-950 text-white`}
        >
          Yes, I pinned it!
        </Link>
      </div>
    </OnboardingLayout>
  )
}
