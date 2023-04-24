import { format } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import { useAuthGuard } from '../auth/AuthGuard'
import { Meeting, MeetingStore } from '../storage/meetings'
import { UserMeetingStore } from '../storage/users/meetings'

type MeetingByDate = { [date: string]: Meeting[] }

export function useMeetings() {
  const { user } = useAuthGuard()

  const userMeetingStore = useMemo(() => new UserMeetingStore(user.email), [user.email])

  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [meetingsByDate, setMeetingsByDate] = useState<MeetingByDate>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    userMeetingStore
      .list()
      .then((m) => setMeetings(m))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [userMeetingStore])

  useEffect(() => {
    try {
      const byDate: { [date: string]: Meeting[] } = {}
      for (const meeting of meetings) {
        const date = format(new Date(meeting.start), 'MM-dd-yy')

        if (!byDate[date]) {
          byDate[date] = []
        }

        byDate[date].push(meeting)
      }

      setMeetingsByDate(byDate)
    } catch (err) {
      setError(err as Error)
    }
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
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

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
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

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
