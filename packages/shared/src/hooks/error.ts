import { useState } from 'react'

type ErrorWithMessage = { message: string; err: Error }

export const useErrors = (value: ErrorWithMessage | null) => {
  const [error, setError] = useState<ErrorWithMessage | null>(value)

  return {
    error,
    setError
  }
}
