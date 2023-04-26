import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../../../assets/img/logo.svg'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  const [step, setStep] = useState<number>(1)

  useEffect(() => {
    const page = location.pathname.replace('/', '')

    if (!isNaN(+page)) {
      setStep(+page)
    }
  }, [location.pathname])

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="md:max-w-[576px] w-full mx-auto sm:px-0 px-[20px]">
        <header className="mb-[10px]">
          <div className="flex items-center gap-[14px] sm:mb-[72px] mb-[54px]">
            <img src={logo} alt="" />
            <h1 className="sm:text-[30px] text-[24px] font-semibold">Recap</h1>
          </div>
          <p className="sm:text-[15px] text-[12px]">Step {step} of 3</p>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
