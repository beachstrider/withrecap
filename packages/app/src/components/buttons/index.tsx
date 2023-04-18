import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className = '', ...rest }: Props) {
  return (
    <button
      className={`text-sm flex items-center gap-2 px-4 py-2 font-semibold bg-gray-100 rounded-[12px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
