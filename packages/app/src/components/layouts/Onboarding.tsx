import React from 'react'
import logo from '../../assets/img/logo.svg'

const OnboardingLayout = ({ children, step }: { children: React.ReactNode; step: number }) => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="md:max-w-[576px] w-full mx-auto sm:px-0 px-[20px]">
        <header className="mb-[10px]">
          <div className="flex items-center gap-[14px] sm:mb-[72px] mb-[54px]">
            <img src={logo} className="w-[52px] h-[36px]" alt="" />
            <h1 className="sm:text-[30px] text-[24px] font-semibold">Recap</h1>
          </div>
          <p className="sm:text-[15px] text-[12px]">Step {step} of 3</p>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default OnboardingLayout
