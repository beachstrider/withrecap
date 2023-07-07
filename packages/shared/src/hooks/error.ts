import { useEffect, useState } from 'react'

import { captureException } from '@sentry/browser'

type ErrorWithMessage = { message: string; err: Error }

export const useErrors = (value: ErrorWithMessage | null) => {
  const [error, setError] = useState<ErrorWithMessage | null>(value)

  useEffect(() => {
    if (error) {
      captureException(new Error(error.message))
    }
  }, [error])

  return {
    error,
    setError
  }
}
