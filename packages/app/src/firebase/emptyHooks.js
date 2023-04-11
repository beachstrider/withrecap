import { useEffect, useState } from 'react'

export function useEmpty() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function action() {
    setData()
    setError(null)
    setLoading(false)
  }

  useEffect(() => {
    action()
  }, [])

  return { data, loading, error }
}
