import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  const [step, setStep] = useState<number>(1)

  useEffect(() => {
    const page = location.pathname.replace('/', '')

    if (!isNaN(+page)) {
      setStep(+page)
    }
  }, [location.pathname])

  return (
    <>
      <header>
        <h1>Recap</h1>
        <p>Step {step} of 4</p>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
