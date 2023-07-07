import React from 'react'

import jeff from '../../../../assets/img/jeff.png'
import max from '../../../../assets/img/max.png'

export const NoMeeting = () => {
  return (
    <div className="my-[24px] overflow-hidden rounded-[16px] bg-gray-100">
      <div className="flex justify-center">
        <div className="leading-[14px] mt-[5px] mb-[8px]">
          <div className="flex rotate-[-14deg] mb-[10px]">
            <div
              className="p-[10px] flex flex-col sm:gap-[16px] gap-[12px] rounded-[9.5px] max-w-[183px] w-full bg-white"
              style={{
                boxShadow:
                  '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex gap-[10px] text-gray-500 text-[10px]">
                <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                <div className="">
                  We should have <span className="font-semibold">fun</span> with the design and{' '}
                  <span className="font-semibold">make it pop</span>!
                </div>
              </div>
              <div className="flex sm:gap-[16px] gap-[12px] text-[9px] font-semibold">
                <img src={max} alt="" className="w-[14px] h-[14px]" />
                <div className="font-semibold">maxwell@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex rotate-[5deg]">
            <div
              className="p-[10px] flex flex-col ml-[2px] sm:gap-[16px] gap-[12px] rounded-[9.5px] max-w-[183px] w-full bg-white"
              style={{
                boxShadow:
                  '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex gap-[10px] text-gray-500 text-[10px]">
                <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                <div className="">
                  <span className="font-semibold">What if we removed the header?</span> How would that look? Just
                  something to consider!
                </div>
              </div>
              <div className="flex sm:gap-[16px] gap-[12px] text-[9px] font-semibold">
                <img src={jeff} alt="" className="w-[14px] h-[14px]" />
                <div className="font-semibold">jeff.m@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[15px] mt-[28px] mb-[24px] flex flex-col gap-[16px] font-semibold">
        <p className="text-gray-500">You’re all set!</p>
        <div className="text-[17px]">Recap will take notes automatically in your next Google Meeting</div>
        <button
          onClick={window.close}
          className="bg-gray-950 rounded-[12px] flex justify-center py-[6px] w-full text-white"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
