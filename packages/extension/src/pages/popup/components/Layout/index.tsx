import React from 'react'

import logo from '../../../../assets/img/logo_32x24.svg'
import outboundLink from '../../../../assets/img/outboundLink.svg'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const openRecapApp = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    return chrome.tabs.create({ url: `http://${process.env.DOMAIN}/app/meetings` })
  }

  return (
    <div className="flex flex-col flex-1">
      <header className="flex justify-between items-center p-[20px] border-solid border-b border-[#f1f3f5]">
        <img src={logo} alt="" className="cursor-pointer" onClick={openRecapApp} />
        <button className="px-[10px] py-[6px] bg-gray-100 rounded-[12px] text-[15px] font-semibold">
          <div onClick={openRecapApp} className="flex gap-[7px]">
            <span>Open Recap</span>
            <img src={outboundLink} alt="" />
          </div>
        </button>
      </header>
      <div className="flex flex-col px-[20px] grow">{children}</div>
    </div>
  )
}
