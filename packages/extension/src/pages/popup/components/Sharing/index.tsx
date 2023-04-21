import React from 'react'

import { Meeting } from '@recap/shared'

interface SharingProps {
  meeting: Meeting
}

// TODO: need to test if this shows in a google meeting page
export const Sharing = ({ meeting }: SharingProps) => {
  return <div className="hidden py-[24px]">...</div>
}
