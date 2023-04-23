import { format } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import { useAuthGuard } from '../auth/AuthGuard'
import { Meeting, MeetingStore } from '../storage/meetings'
import { UserMeetingStore } from '../storage/users/meetings'

export function useMeetings() {
  const { user } = useAuthGuard()

  const userMeetingStore = useMemo(() => new UserMeetingStore(user.email), [user.email])

  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [meetingsByDate, setMeetingsByDate] = useState<{ [date: string]: Meeting[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    userMeetingStore
      .list()
      .then((m) => setMeetings(m))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [userMeetingStore])

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
    meetingStore
      .get(mid)
      .then((meeting) => setData(meeting))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [meetingStore, mid])

  return { meeting: data, loading, error }
}

export function useRecentMeeting() {
  const { user } = useAuthGuard()

  const userMeetingStore = useMemo(() => new UserMeetingStore(user.email), [user.email])

  const [recentMeeting, setRecentMeeting] = useState<Meeting | undefined>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    userMeetingStore
      .recent()
      .then(setRecentMeeting)
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [userMeetingStore])

  return {
    recentMeeting,
    loading,
    error
  }
}
