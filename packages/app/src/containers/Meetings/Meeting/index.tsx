import React, { createContext, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Todo, toast, useMeeting, useTodo } from '@recap/shared'

import { Layout } from '../../../components/layouts'
import NotFound from '../../NotFound'
import Content from './Content'
import Info from './Info'

interface MeetingContextType {
  addTodo: (todo: Omit<Todo, 'id'>) => Promise<void>
  deleteTodo: (tid: Todo['id']) => Promise<void>
}

export const MeetingContext = createContext<MeetingContextType>({} as MeetingContextType)

export const useTodoBlalbla = () => {
  return useContext(MeetingContext)
}

export default function MeetingDetails() {
  const { mid } = useParams()
  const { meeting, loading, error } = useMeeting(mid!)
  const { addTodo, deleteTodo } = useTodo(mid!)

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
    <MeetingContext.Provider value={{ addTodo, deleteTodo }}>
      <Layout isLoading={loading}>
        {meeting && !loading && (
          <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
            <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px] break-all">
              <Info meeting={meeting} />
              <Content meeting={meeting} />
            </div>
          </div>
        )}
      </Layout>
    </MeetingContext.Provider>
  )
}
