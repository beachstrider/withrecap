import { useEffect, useState } from 'react'

export function useEmpty() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
  }, [])

  return { data, loading, error }
}
