import { differenceInSeconds, isThisWeek, secondsToHours } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'

import { useAuthGuard } from '../auth/AuthGuard'
import { Meeting, MeetingStore } from '../storage/meetings'
import { UserMeetingStore } from '../storage/users/meetings'
import { useErrors } from './error'

type MeetingByDate = { [date: string]: Meeting[] }

export function useMeetings() {
  const { user } = useAuthGuard()
  const { error, setError } = useErrors(null)

  const userMeetingStore = useMemo(() => new UserMeetingStore(user.email), [user.email])

  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [meetingsByDate, setMeetingsByDate] = useState<MeetingByDate>({})
  const [weekSaveHours, setWeekSaveHours] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    userMeetingStore
      .list()
      .then((m) => {
        setMeetings(m)
        setError(null)
      })
      .catch((err: Error) => setError({ message: 'An error occurred while fetching the meetings', err }))
      .finally(() => setLoading(false))
  }, [userMeetingStore, setError])

  useEffect(() => {
    try {
      let saveTime = 0

      const byDate: { [date: string]: Meeting[] } = {}

      for (const meeting of meetings) {
        if (!byDate[meeting.start]) {
          byDate[meeting.start] = []
        }

        if (isThisWeek(new Date(meeting.start))) {
          saveTime += differenceInSeconds(new Date(meeting.end), new Date(meeting.start))
        }

        byDate[meeting.start].push(meeting)
      }

      setMeetingsByDate(byDate)
      setWeekSaveHours(secondsToHours(saveTime))
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while processing meeting information', err: err as Error })
    }
  }, [meetings, setError])

  return {
    meetings,
    meetingsByDate,
    weekSaveHours,
    loading,
    error
  }
}

export function useMeeting(mid: string) {
  const meetingStore = useMemo(() => new MeetingStore(), [])

  const [data, setData] = useState<Meeting>()
  const [loading, setLoading] = useState<boolean>(true)

  const { error, setError } = useErrors(null)

  const fetchMeeting = async () => {
    try {
      const meeting = await meetingStore.get(mid)
      setData(meeting)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while fetching meeting information', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (todo: any) => {
    try {
      // TODO: add logic here
      console.debug('---  adding todo:', todo)
      await fetchMeeting()
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while adding todo', err: err as Error })
    }
  }

  const updateTodo = async (todo: any) => {
    try {
      // TODO: update logic here
      console.debug('---  updating todo:', todo)
      await fetchMeeting()
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while updating todo', err: err as Error })
    }
  }

  const deleteTodo = async (todo: any) => {
    try {
      // TODO: delete logic here
      console.debug('---  deleting todo:', todo)
      await fetchMeeting()
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while updating todo', err: err as Error })
    }
  }

  useEffect(() => {
    fetchMeeting()
  }, [])

  return { meeting: data, addTodo, updateTodo, deleteTodo, loading, error }
}

export function useRecentMeeting() {
  const { user } = useAuthGuard()
  const { error, setError } = useErrors(null)

  const userMeetingStore = useMemo(() => new UserMeetingStore(user.email), [user.email])

  const [recentMeeting, setRecentMeeting] = useState<Meeting | undefined>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    userMeetingStore
      .recent()
      .then((m) => {
        setRecentMeeting(m)
        setError(null)
      })
      .catch((err: Error) => setError({ message: 'An error occurred while fetching meeting information', err }))
      .finally(() => setLoading(false))
  }, [userMeetingStore, setError])

  return {
    recentMeeting,
    loading,
    error
  }
}
