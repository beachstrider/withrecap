import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef } from 'react'
import NoScroll from '../styles/NoScroll'

interface Props {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

export const Modal = ({ children, open, onClose }: Props) => {
  const closeButtonRef = useRef(null)

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 w-screen h-screen" initialFocus={closeButtonRef} onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 py-5 bg-white sm:p-6">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

          <NoScroll />
        </Dialog>
      </Transition.Root>
    </>
  )
}
