import React from 'react'

export default function Index({ children, className, ...rest }: any) {
  return (
    <div
      className={`text-[15px] font-semibold flex items-center gap-[6px] px-[10px] py-[6px] font-semibold bg-gray-100 rounded-[12px] ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
