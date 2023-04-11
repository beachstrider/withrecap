import { useEffect, useState } from 'react'
import { Auth, useStore } from '../store'
import { collection, db, doc, getDoc, getDocs } from './index'

export function useMeetings() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useStore(Auth)

  async function action() {
    const values = []
    const userRef = doc(db, 'users', user?.uid)
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
