import { format } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import { useAuthGuard } from '../auth/AuthGuard'
import { Meeting, MeetingStore } from '../storage/meetings'
import { UserMeetingStore } from '../storage/users/meetings'

export function useMeetings() {
  const { user } = useAuthGuard()

  const meetingStore = useMemo(() => new MeetingStore(), [])
  const userMeetingStore = useMemo(() => new UserMeetingStore(user.uid), [user.uid])

  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [meetingsByDate, setMeetingsByDate] = useState<{ [date: string]: Meeting[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    userMeetingStore.list().then((mids: string[]) => {
      meetingStore.getByIds(mids).then((m: Meeting[]) => {
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

export function useMeeting(mid: string) {
  const meetingStore = useMemo(() => new MeetingStore(), [])

  const [data, setData] = useState<Meeting>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    meetingStore.get(mid).then((meeting?: Meeting) => {
      setData(meeting)
      setLoading(false)
      setError(null)
    })
  }, [meetingStore, mid])

  return { meeting: data, loading, error }
}

export function useRecentMeeting() {
  const { user } = useAuthGuard()

  const userMeetingStore = useMemo(() => new UserMeetingStore(user.uid), [user.uid])
  const meetingStore = useMemo(() => new MeetingStore(), [])

  const [recentMeeting, setRecentMeeting] = useState<Meeting | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    userMeetingStore
      .recent()
      .then((recentMeetingId?: string) => {
        if (!recentMeetingId) {
          return
        }

        meetingStore
          .get(recentMeetingId)
          .then(setRecentMeeting)
          .finally(() => setLoading(false))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [userMeetingStore, meetingStore])

  return {
    recentMeeting,
    loading
  }
}
