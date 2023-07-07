import React from 'react'

import { captureException } from '@sentry/browser'
import { ToastContainer as Container, ToastOptions, toast as toastify } from 'react-toastify'

export const toast = {
  success: toastify.success,
  error: (message: string, error: unknown, options?: ToastOptions<{}> | undefined) => {
    console.error(message, error)

    captureException(new Error(message))

    return toastify.error(`${message}. Please retry later or contact the support if the problem persists.`, options)
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
