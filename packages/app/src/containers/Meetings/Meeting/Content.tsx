import React, { useEffect } from 'react'

import { Highlight, Meeting, toast, useAuthGuard, useHighlights, useTodos } from '@recap/shared'

import HighlightList from './HighlightList'
import Processing from './Processing'
import Summary from './Summary'
import TodoList from './TodoList'
import Transcript from './Transcript'

export default function Content({ meeting }: { meeting: Meeting }) {
  const {
    user: { email }
  } = useAuthGuard()

  const disabled = !meeting.emails.includes(email)

  const { attendees } = meeting
  const { todos, refresh: refreshTodos, error: errorTodos } = useTodos(meeting.mid)
  const { highlights: _highlights, refresh: refreshHighlights, error: errorHighlights } = useHighlights(meeting.mid)

  const getAvatar = (email: string): string | undefined => {
    return Object.values(attendees).find((a) => a.email === email)?.avatar
  }

  const highlights = _highlights.map((highlight: Highlight) => ({ ...highlight, avatar: getAvatar(highlight.email) }))

  useEffect(() => {
    if (errorTodos) {
      toast.error(errorTodos.message, errorTodos.err)
    }

    if (errorHighlights) {
      toast.error(errorHighlights.message, errorHighlights.err)
    }
  }, [errorTodos, errorHighlights])

  // Meeting is ended
  if (meeting.processed) {
    // Meeting is processed
    if (meeting.conversation.length) {
      return (
        <div className="grow">
          <Summary meeting={meeting} />
          <TodoList mid={meeting.mid} todos={todos} disabled={disabled} refresh={refreshTodos} />
          <HighlightList mid={meeting.mid} highlights={highlights} disabled={disabled} refresh={refreshHighlights} />
          <Transcript meeting={meeting} refreshTodos={refreshTodos} refreshHighlights={refreshHighlights} />
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
