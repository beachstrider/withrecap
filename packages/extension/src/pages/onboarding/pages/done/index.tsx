import React from 'react'

import browser from '../../../../assets/img/browser.png'

export const Done = () => {
  const closeTab = async () => {
    await chrome.tabs.create({ url: `${process.env.RECAP_APP_BASE_URL}/app/meetings` })

    const tab = await chrome.tabs.getCurrent()
    if (tab?.id) {
      await chrome.tabs.remove(tab.id)
    }
  }

  return (
    <>
      <h1 className="sm:mb-[64px] mb-[48px]">Pin Recap to Chrome for the best experience</h1>
      <img className="img-browser sm:mb-[64px] mb-[48px]" src={browser} alt="" />
      <div className="flex justify-center">
        <button
          onClick={closeTab}
          className={`px-[14px] py-[10px] rounded-[14px] sm:text-[15px] text-[12px] font-semibold bg-gray-950 text-white`}
        >
          Yes, I pinned it!
        </button>
      </div>
    </>
  )
}
