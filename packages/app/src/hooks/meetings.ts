import { useEffect, useMemo, useState } from 'react'

import { Meeting, MeetingStore } from '@recap/shared/'

export function useMeetings() {}

export function useMeetingDetails(mid: string) {
  const meetingStore = useMemo(() => new MeetingStore(), [])

  const [data, setData] = useState<Meeting>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    meetingStore.get(mid).then((meeting) => {
      setData(meeting)
      setLoading(false)
      setError(null)
    })
  }, [meetingStore, mid])

  return { meetingDetails: data, loading, error }
}
