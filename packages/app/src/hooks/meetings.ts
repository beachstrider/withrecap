import { Meeting, MeetingStore, UserMeetingStore, useAuthGuard } from '@recap/shared/'
import { format } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'

export function useMeetings() {
  const { user } = useAuthGuard()

  const meetingStore = useMemo(() => new MeetingStore(), [])
  const userMeetingStore = useMemo(() => new UserMeetingStore(user.uid), [user.uid])

  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [meetingsByDate, setMeetingsByDate] = useState<{ [date: string]: Meeting[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    userMeetingStore.list().then((mids) => {
      meetingStore.getByIds(mids).then((m) => {
        setMeetings(m)

        if (m.length === 0) {
          setLoading(false)
        }
      })
    })
  }, [userMeetingStore, meetingStore])

  useEffect(() => {
    const byDate: { [date: string]: Meeting[] } = {}
    for (const meeting of meetings) {
      const date = format(new Date(meeting.start), 'MM-dd-yy')

      if (!byDate[date]) {
        byDate[date] = []
      }

      byDate[date].push(meeting)
    }

    setMeetingsByDate(byDate)
    setLoading(false)
  }, [meetings])

  return {
    meetings,
    meetingsByDate,
    loading,
    error
  }
}

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
