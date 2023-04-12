import React from 'react'

export default function Index({ children, className, ...rest }: any) {
  return (
    <div className={` ${className}`} {...rest}>
      {children}
    </div>
  )
}
