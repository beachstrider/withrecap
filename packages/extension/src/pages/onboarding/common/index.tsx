import React from 'react'

import './index.css'

type NextButtonProps = {
  onClick: React.DOMAttributes<HTMLSpanElement>['onClick']
}
export const NextButton = (props: NextButtonProps) => {
  return (
    <span
      id="next-button"
      onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()

        props.onClick?.(e)
      }}
    >
      Next
    </span>
  )
}
