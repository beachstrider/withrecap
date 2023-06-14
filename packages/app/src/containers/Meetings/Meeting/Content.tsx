import React, { useEffect } from 'react'

import { Meeting, toast, useAuthGuard, useTodos } from '@recap/shared'

import HighlightList from './HighlightList'
import Processing from './Processing'
import Summary from './Summary'
import TodoList from './TodoList'
import Transcript from './Transcript'

export default function Content({ meeting }: { meeting: Meeting }) {
  const {
    user: { email }
  } = useAuthGuard()

  const { todos, refresh: refreshTodos, error } = useTodos(meeting.mid)

  const disabled = !meeting.emails.includes(email)

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  // Meeting is ended
  if (typeof meeting.recorders === 'undefined') {
    if (meeting.processed) {
      // Meeting is processed
      if (meeting.conversation.length > 0) {
        return (
          <div className="grow">
            <Summary meeting={meeting} />
            <TodoList mid={meeting.mid} todos={todos} disabled={disabled} refresh={refreshTodos} />
            <HighlightList meeting={meeting} />
            <Transcript meeting={meeting} refreshTodos={refreshTodos} />
          </div>
        )
      } else {
        // Meeting has no conversation
        return <div className="grow">This meeting has no conversation.</div>
      }
    } else {
      return <Processing meeting={meeting} />
    }
  }

  // Meeting is being recorded
  return <Processing meeting={meeting} />
}
