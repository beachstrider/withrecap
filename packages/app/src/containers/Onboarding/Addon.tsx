import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { UserAddons, useAddons } from '@recap/shared'

import { SkipButton } from '../../components/buttons'
import OnboardingLayout from '../../components/layouts/Onboarding'

import { ONBOARDING_DONE } from '../../constants/routes'

export const OnboardingAddon = () => {
  const { addons, userAddons, enableAddon, loading } = useAddons()
  const navigate = useNavigate()

  const isEnabled = (id: string): boolean => {
    return userAddons[id]?.enabled
  }

  const hasEnabled = (userAddons: UserAddons) => {
    for (const name of Object.keys(userAddons)) {
      if (userAddons[name].enabled) return true
    }

    return false
  }

  useEffect(() => {
    if (hasEnabled(userAddons)) {
      navigate(ONBOARDING_DONE)
    }
  }, [userAddons, navigate])

  const renderAddonList = () => {
    return Object.entries(addons).map(([id, addon]) => (
      <div
        className={`flex justify-between items-center w-full px-[24px] py-[16px] rounded-[16px] ${
          addon.available ? 'bg-gray-100' : ''
        }`}
        key={id}
      >
        <div className="flex gap-[12px] items-center">
          <img src={addon.logo} alt={`${addon.name} Logo`} className="w-[50px] h-[50px]" />
          <div className="flex flex-col gap-[1px]">
            <div className="sm:text-[17px] text-[12px] font-semibold">{addon.name}</div>
            {addon.popular ? <div className="text-gray-500">Most Popular</div> : ''}
          </div>
        </div>
        <button
          disabled={!addon.available || isEnabled(id)}
          onClick={async () => await enableAddon(id, addon)}
          className={`px-[14px] py-[10px] rounded-[14px] sm:text-[15px] text-[12px] font-semibold ${
            isEnabled(id)
              ? 'bg-gray-950 text-white' // Enabled
              : addon.available
              ? 'border-[3px] border-solid border-gray-950 bg-white hover:bg-gray-200 cursor-pointer' // Connect
              : 'bg-gray-100 text-gray-500' // Coming Soon
          }`}
        >
          {isEnabled(id) ? 'Enabled' : addon.available ? 'Connect' : 'Coming Soon'}
        </button>
      </div>
    ))
  }

  return (
    <OnboardingLayout step={2} loading={loading}>
      <h2 className="font-semibold sm:mb-[64px] mb-[48px]">Add Recap to your video call apps</h2>
      <div className="flex flex-col gap-[16px] sm:mb-[64px] mb-[48px]">{renderAddonList()}</div>
      <div className="flex justify-center">
        <SkipButton onClick={() => navigate(ONBOARDING_DONE)} />
      </div>
    </OnboardingLayout>
  )
}
