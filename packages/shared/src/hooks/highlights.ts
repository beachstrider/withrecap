import { useEffect, useMemo, useState } from 'react'

import { useErrors } from './error'
import { Highlights, HighlightsStore } from '../storage/meetings/highlights'

export function useHighlights(mid: string) {
  const highlightsStore = useMemo(() => new HighlightsStore(mid), [mid])

  const [data, setData] = useState<Highlights>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { error, setError } = useErrors(null)

  useEffect(() => {
    highlightsStore
      .list()
      .then((highlights) => {
        setData(highlights)
        setError(null)
      })
      .catch((err) => {
        setError({ message: 'An error occurred while fetching the highlights', err: err as Error })
      })
      .finally(() => {
        setLoading(false)
      })
  }, [highlightsStore, setError])

  return { highlights: data, loading, error }
}
