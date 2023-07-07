import React from 'react'

import { Switch as UiSwitch } from '@headlessui/react'

interface CheckProps {
  checked?: boolean
  onClick?: () => void
  rest?: any
}

export function Switch({ checked = false, onClick, ...rest }: CheckProps) {
  return (
    <UiSwitch
      type="button"
      className={`${
        checked ? 'bg-purple-600' : 'bg-gray-200'
      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
      aria-checked={checked}
      {...rest}
      checked={checked}
      onClick={onClick}
    >
      <span className="sr-only"></span>
      <span
        aria-hidden="true"
        className={`${
          checked ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
      ></span>
    </UiSwitch>
  )
}
