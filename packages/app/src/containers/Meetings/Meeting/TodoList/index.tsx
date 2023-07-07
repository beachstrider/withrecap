import greenCheck from '../../../../assets/img/greenCheck.png'
import Todo from './Todo'
import { Todos } from '@recap/shared'
import React from 'react'

interface TodosProps {
  mid: string
  todos: Todos
  refresh: () => Promise<void>
  disabled?: boolean
}

export default function TodoList({ mid, todos, refresh, disabled = false }: TodosProps) {
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
          <Todo key={key} mid={mid} todo={todo} disabled={disabled} onChange={refresh} />
        ))}
        {!disabled && <Todo create mid={mid} onChange={refresh} disabled={disabled} />}
      </div>
    </div>
  )
}
