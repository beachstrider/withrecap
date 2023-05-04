import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Menu } from '@headlessui/react'
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import { MeetingTodo } from '@recap/shared'

import { useTodo } from '../../../../pages/Meetings/Details'

import dots from '../../../../assets/img/dots.svg'
import add from '../../../../assets/img/plus.svg'

interface TodoProps {
  todo?: MeetingTodo
}

export default function Todo({ todo }: TodoProps) {
  const { addTodo, updateTodo, deleteTodo } = useTodo()

  const [editing, setEditing] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<MeetingTodo>({ defaultValues: todo || { completed: false } })

  const onSubmit = async (data: MeetingTodo) => {
    // Remove unnecessary spaces
    data.text = data.text.replace(/\s+/g, ' ').trim()

    if (todo) {
      await updateTodo(data)
    } else {
      await addTodo(data)
    }
    setEditing(false)
  }

  const onDelete = async (todo: MeetingTodo) => {
    await deleteTodo(todo)
    setEditing(false)
  }

  useEffect(() => {
    reset()
  }, [editing, reset])

  if (editing) {
    return (
      <form className="flex items-center grow" onSubmit={handleSubmit(onSubmit)}>
        <input disabled {...register('completed')} type="checkbox" className="mr-[20px]" />
        <input
          autoFocus
          {...register('text', { required: true })}
          placeholder="Enter a text of new to-do"
          className={`grow bg-white border-[2px] border-solid shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-[12px] py-[8px] text-[15px] mr-[10px] ${
            errors.text ? 'border-red-500' : 'border-gray-200 focus:ring-primary focus:border-primary'
          }`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center px-4 py-2 mr-[10px] border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setEditing(false)}
          className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        >
          Cancel
        </button>
      </form>
    )
  }

  if (todo) {
    return (
      <div className="flex items-center gap-[20px] text-gray-900 group">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
        />
        <div className="grow">{todo.text}</div>
        <div>
          <Menu>
            <Menu.Button className="invisible group-hover:visible">
              <img src={dots} alt="" />
            </Menu.Button>
            <Menu.Items className="z-[1000] absolute p-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setEditing(true)}
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <PencilIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Change
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => onDelete(todo)}
                    className={`${
                      active ? 'bg-red-400 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <TrashIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    )
  }

  return (
    <button onClick={() => setEditing(true)} className="flex items-center gap-[20px] text-gray-500 font-semibold">
      <img src={add} alt="" className="ml-[4px] w-[16px] h-[16px]" />
      <div>Add</div>
    </button>
  )
}
