import React from 'react'

import Header from './Header'

export default function Index({ children, isPublic, ...rest }: any) {
  return (
    <>
      <Header isPublic={isPublic} />
      <main {...rest}>{children}</main>
    </>
  )
}
