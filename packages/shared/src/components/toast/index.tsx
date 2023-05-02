import { captureException } from '@sentry/browser'
import React from 'react'

import { toast as toastify, ToastContainer as Container, ToastOptions } from 'react-toastify'

export const toast = {
  success: toastify.success,
  error: (message: string, error: unknown, options?: ToastOptions<{}> | undefined) => {
    console.error(message, error)

    captureException(new Error(message, { cause: error }))

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
