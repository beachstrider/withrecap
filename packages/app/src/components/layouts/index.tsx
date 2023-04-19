import React from 'react'

import { LoadingIcon } from '@recap/shared'
import Header from './Header'

interface Props {
  children?: any
  isPublic?: boolean // True for public pages, false for private (authed) pages
  isLoading?: boolean // True during data gets fetched
  rest?: any
}

export default function Index({ children, isPublic = false, isLoading = false, ...rest }: Props) {
  return (
    <>
      <Header isPublic={isPublic} />
      <main {...rest}>{isLoading ? <Loading /> : children}</main>
    </>
  )
}

const Loading = () => (
  <div className="flex items-center justify-center flex-1">
    <LoadingIcon size="lg" />
  </div>
)
