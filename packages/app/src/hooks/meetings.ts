import { useEffect, useState } from 'react'

import { MeetingStore } from '@recap/shared/'
import { useAuth } from '../auth/AuthProvider'
import { collection, db, doc, getDoc, getDocs } from '../firebase/index'

export function useMeetings() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useAuth()

  async function action() {
    const values = []
    const userRef = doc(db, 'users', user?.uid!)
    const meetingsSnapshot = await getDocs(collection(userRef, 'meetings'))

    for await (const { id } of meetingsSnapshot.docs) {
      const meetingRef = doc(db, 'meetings', id)
      const meeting = await getDoc(meetingRef)
      values.push(meeting.data())
    }

    setData(values)
    setLoading(false)
    setError(null)
  }

  useEffect(() => {
    action()
  }, [])

  return { meetings: data, loading, error }
}

export function useMeetingDetails(mid: string) {
  const meetingStore = new MeetingStore()

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function action() {
    const value = await meetingStore.get(mid)

    setData(value)
    setLoading(false)
    setError(null)
  }

  useEffect(() => {
    action()
  }, [])

  return { meetingDetails: data, loading, error }
}
