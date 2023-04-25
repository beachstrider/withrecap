import React from 'react'

import { LoadingIcon } from '@recap/shared'

import Footer from './Footer'
import Header from './Header'

type MainProps = JSX.IntrinsicElements['main']
interface Props extends MainProps {
  children?: React.ReactNode
  isPublic?: boolean // True for public pages, false for private (authenticated) pages
  isLoading?: boolean // True during data gets fetched
}

export default function Index({ children, isPublic = false, isLoading = false, ...rest }: Props) {
  return (
    <>
      <Header isPublic={isPublic} />
      <main {...rest}>{isLoading ? <Loading /> : children}</main>
      {isPublic && <Footer />}
    </>
  )
}

const Loading = () => (
  <div className="flex items-center justify-center flex-1">
    <LoadingIcon size="lg" />
  </div>
)
