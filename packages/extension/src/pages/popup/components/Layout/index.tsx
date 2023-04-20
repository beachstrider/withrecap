import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../../../../assets/img/logo_32x24.svg'
import outboundLink from '../../../../assets/img/outboundLink.svg'

const Layout = () => {
  const openRecapApp = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    return chrome.tabs.create({ url: process.env.RECAP_APP_BASE_URL })
  }

  return (
    <div className="">
      <header className="flex justify-between items-center p-[20px] border-solid border-b border-[#f1f3f5]">
        <img src={logo} alt="" />
        <button className="px-[10px] py-[6px] bg-gray-100 rounded-[12px] text-[15px] font-semibold">
          <div onClick={openRecapApp} className="flex gap-[7px]">
            <span>Open Recap</span>
            <img src={outboundLink} alt="" />
          </div>
        </button>
      </header>
      <div className="p-[20px]">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
