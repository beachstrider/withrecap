import React, { createContext, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MeetingTodo, toast, useMeeting } from '@recap/shared'

import Info from '../../components/dashboard/Meeting/Info'
import MeetingContent from '../../components/dashboard/Meeting/MeetingContent'
import Layout from '../../components/layouts'

// TODO: replace types any with proper types
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

  return (
    <MeetingContext.Provider value={{ addTodo, updateTodo, deleteTodo }}>
      <Layout isLoading={loading}>
        {!loading && (
          <>
            {meeting && (
              <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
                <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px]">
                  <Info MeetingDetail={meeting} />
                  <MeetingContent meeting={meeting} />
                </div>
              </div>
            )}
            {error && <div className="flex justify-center py-[80px]">Sorry, there is no such meeting.</div>}
          </>
        )}
      </Layout>
    </MeetingContext.Provider>
  )
}
