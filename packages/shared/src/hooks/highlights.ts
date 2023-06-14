import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Highlight, Highlights, HighlightsStore } from '../storage/meetings/highlights'
import { useErrors } from './error'

export function useHighlights(mid: string) {
  const highlightsStore = useMemo(() => new HighlightsStore(mid), [mid])

  const [data, setData] = useState<Highlights>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { error, setError } = useErrors(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const highlights = await highlightsStore.list()

      setData(highlights)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while fetching the highlights', err: err as Error })
    } finally {
      setLoading(false)
    }
  }, [highlightsStore, setError])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { highlights: data, refresh, loading, error }
}

export function useHighlight(mid: string) {
  const highlightsStore = useMemo(() => new HighlightsStore(mid), [mid])

  const [loading, setLoading] = useState<boolean>(true)

  const { error, setError } = useErrors(null)

  const addHighlight = async (highlight: Omit<Highlight, 'id'>) => {
    try {
      setLoading(true)

      await highlightsStore.add({ id: uuid(), ...highlight })
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while adding the highlight', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  const deleteHighlight = async (id: Highlight['id']) => {
    try {
      setLoading(true)

      await highlightsStore.delete(id)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while deleting the highlight', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  const updateHighlight = async (id: Highlight['id'], highlight: Omit<Highlight, 'id'>) => {
    try {
      setLoading(true)

      await highlightsStore.update(id, highlight)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while updating the highlight', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  return { addHighlight, deleteHighlight, updateHighlight, loading, error }
}
