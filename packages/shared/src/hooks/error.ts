import { captureException } from '@sentry/browser'
import { useEffect, useState } from 'react'

type ErrorWithMessage = { message: string; err: Error }

export const useErrors = (value: ErrorWithMessage | null) => {
  const [error, setError] = useState<ErrorWithMessage | null>(value)

  useEffect(() => {
    if (error) {
      captureException(new Error(error.message, { cause: error.err }))
    }
  }, [error])

  return {
    error,
    setError
  }
}
