import React from 'react'

import './index.css'

type SkipButtonProps = {
  onClick: React.DOMAttributes<HTMLSpanElement>['onClick']
}
export const SkipButton = (props: SkipButtonProps) => {
  return (
    <span
      id="skip-button"
      onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()

        props.onClick?.(e)
      }}
    >
      Skip
    </span>
  )
}
