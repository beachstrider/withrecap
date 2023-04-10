import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <p>Recap</p>
        <button>Open Recap -&gt;</button>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
