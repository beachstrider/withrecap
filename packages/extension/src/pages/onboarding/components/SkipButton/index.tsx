import React from 'react'

import './index.css'

type SkipButtonProps = {
  onClick: React.DOMAttributes<HTMLSpanElement>['onClick']
}
export const SkipButton = (props: SkipButtonProps) => {
  return (
    <button
      id="skip-button"
      className="text-gray-500"
      onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()

        props.onClick?.(e)
      }}
    >
      Skip
    </button>
  )
}
