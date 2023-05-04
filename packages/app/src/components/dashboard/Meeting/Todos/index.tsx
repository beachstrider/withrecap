import { Meeting } from '@recap/shared'
import React from 'react'

import Todo from './Todo'

import greenCheck from '../../../../assets/img/greenCheck.png'

interface TodosProps {
  meeting: Meeting
}

export default function Todos({ meeting }: TodosProps) {
  // TODO: todos will be from meeting.todos
  const todos = [
    {
      id: '1',
      text: 'Maxwell and Jessica to brainstorm marketing strategy',
      completed: true
    },
    {
      id: '2',
      text: 'Justin to present latest product updates to engineering team',
      completed: false
    },
    {
      id: '3',
      text: 'Jessica to walk through storyboard with design team',
      completed: false
    }
  ]

  // const [like, setLike] = useState<1 | -1 | 0>(0)

  return (
    <div className="sm:mb-[82px] mb-[60px]">
      <div className="flex justify-between">
        <div className="flex sm:gap-[16px] gap-[12px] items-center sm:mb-[34px] mb-[25px]">
          <img src={greenCheck} alt="" className="w-[28px] h-[28px]" />
          <div className="font-semibold">To-do's</div>
          <div className="font-semibold text-gray-500">{todos.length}</div>
        </div>
        <div className="flex gap-[12px]">
          {/* TODO: this is scoped next time
          <ThumbsDown checked={like === -1} onClick={() => setLike(-1)} />
          <ThumbsUp checked={like === 1} onClick={() => setLike(1)} /> */}
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        {todos.map((todo, key) => (
          <Todo key={key} todo={todo} />
        ))}
        {/* If prop todo is not given, Todo becomes a new Todo */}
        <Todo />
      </div>
    </div>
  )
}
