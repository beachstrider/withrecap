import React, { createContext, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MeetingTodo, toast, useMeeting } from '@recap/shared'

import Info from '../../components/dashboard/Meeting/Info'
import MeetingContent from '../../components/dashboard/Meeting/MeetingContent'
import Layout from '../../components/layouts'
import NotFound from '../NotFound'

interface MeetingContextType {
  addTodo: (todo: { text: string; completed: boolean }) => Promise<void>
  updateTodo: (todo: MeetingTodo) => Promise<void>
  deleteTodo: (todo: MeetingTodo) => Promise<void>
}

export const MeetingContext = createContext<MeetingContextType>({} as MeetingContextType)

export const useTodo = () => {
  return useContext(MeetingContext)
}

export default function MeetingDetails() {
  const { mid } = useParams()
  const { meeting, addTodo, updateTodo, deleteTodo, loading, error } = useMeeting(mid!)

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  // If a meeting link doesn't exist, show 404
  if (!meeting && !loading) {
    return <NotFound />
  }

  return (
    <MeetingContext.Provider value={{ addTodo, updateTodo, deleteTodo }}>
      <Layout isLoading={loading}>
        {meeting && !loading && (
          <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
            <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px]">
              <Info meeting={meeting} />
              <MeetingContent meeting={meeting} />
            </div>
          </div>
        )}
      </Layout>
    </MeetingContext.Provider>
  )
}
