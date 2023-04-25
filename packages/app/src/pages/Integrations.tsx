import React, { useEffect } from 'react'

import { Addon, toast, useIntegrations } from '@recap/shared'
import Layout from '../components/layouts'

export default function Index() {
  const { addons, userAddons, enableAddon, loading, error } = useIntegrations()

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  const isEnabled = (id: string): boolean => {
    return userAddons[id]?.enabled
  }

  return (
    <Layout isLoading={loading}>
      <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="sm:mb-[58px] mb-[42px]">
          <h4 className="font-semibold mb-[10px]">Integrations</h4>
          <div className="text-gray-500">Manage which video call apps Recap will take your notes from.</div>
        </div>
        <div className="flex flex-col sm:gap-[16px] gap-[12px]">
          {Object.keys(addons).length > 0 ? (
            Object.entries(addons).map(([id, addon]: [string, Addon]) => (
              <div
                className={`flex justify-between items-center w-full px-[24px] py-[16px] rounded-[16px] ${
                  addon.available ? 'bg-gray-100' : ''
                }`}
                key={id}
              >
                <div className="flex gap-[12px] items-center">
                  <div className="flex w-[50px] h-[50px] rounded-full border-[2px] border-solid border-gray-100 overflow-hidden">
                    <img src={addon.logo} alt={`${addon.name} Logo`} className="flex-1" />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <div className="sm:text-[17px] text-[12px] font-semibold">{addon.name}</div>
                    {addon.popular ? <div className="text-gray-500">Most Popular</div> : ''}
                  </div>
                </div>
                <button
                  disabled={!addon.available || isEnabled(id)}
                  onClick={async () => await enableAddon(id, addon)}
                  className={`px-[14px] py-[10px] rounded-[14px] sm:text-[15px] text-[12px] font-semibold 
                ${
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
          ) : (
            <p className="sm:text-[17px] text-[12px] sm:mb-[72px] mb-[54px]">No integration available at the moment.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
