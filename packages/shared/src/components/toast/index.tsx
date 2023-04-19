import React from 'react'

import { ToastContainer as Container, toast as toastify, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toast = {
  error: (message: string, error: unknown, options?: ToastOptions<{}> | undefined) => {
    console.error(message, error)

    return toastify.error(`${message}. Please retry later or contact the support if the problem persists.`)
  }
}

export const ToastContainer = () => {
  return (
    <div>
      <Container
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}
