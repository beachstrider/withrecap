import React from 'react'

interface Props {
  className?: string
  name?: string
  avatar?: string
}

export default function UserAvatar({ className, name, avatar }: Props) {
  return (
    <div
      className={`flex w-[28px] h-[28px] shrink-0 rounded-full overflow-hidden sm:text-[12px] text-[9px] ${className}`}
    >
      {avatar && <img src={avatar} alt="" className="flex-1" />}
      {!avatar && (
        <div className="flex items-center justify-center flex-1 font-semibold bg-gray-200">
          {name?.substring(0, 1) || '?'}
        </div>
      )}
    </div>
  )
}
