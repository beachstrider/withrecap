import React, { useEffect, useState } from 'react'

import { Menu } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/20/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { type Todo as MeetingTodo, toast, useTodo } from '@recap/shared'

import dots from '../../../../assets/img/dots.svg'
import add from '../../../../assets/img/plus.svg'

interface BaseTodoProps {
  mid: string
  onChange: () => Promise<void>
  disabled: boolean
}

interface TodoProps extends BaseTodoProps {
  todo?: MeetingTodo
  create?: undefined
}

interface TodoCreateProps extends BaseTodoProps {
  todo?: undefined
  create: true
}

const schema = yup.object().shape({
  text: yup
    .string()
    .trim()
    .min(1, 'TODO needs to be at least 1 characters')
    .max(512, 'TODO cannot exceed 512 characters')
    .required('This field is required')
})

export default function Todo({ todo, onChange, mid, create, disabled }: TodoProps | TodoCreateProps) {
  const { addTodo, deleteTodo, updateTodo, error } = useTodo(mid)

  const [editing, setEditing] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<MeetingTodo>({ defaultValues: todo || { completed: false }, resolver: yupResolver(schema) })

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  const onSubmit = async (data: MeetingTodo) => {
    data.text = data.text.trim()

    await addTodo(data)

    onChange()
    setEditing(false)
  }

  const onDelete = async (tid: MeetingTodo['id']) => {
    await deleteTodo(tid)

    onChange()
    setEditing(false)
  }

  const onUpdate = async (todo: MeetingTodo) => {
    await updateTodo(todo.id, todo)

    onChange()
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
          {...register('text')}
          placeholder="Enter a text of new to-do"
          className={`grow bg-white border-[2px] border-solid shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-[12px] py-[8px] text-[15px] mr-[10px] ${
            errors.text ? 'border-red-500' : 'border-gray-200 focus:ring-primary focus:border-primary'
          }`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex flex-shrink-0 items-center px-4 py-2 mr-[10px] border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setEditing(false)}
          className={`inline-flex flex-shrink-0 items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
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
          disabled={disabled}
          onChange={(e) => onUpdate({ ...todo, completed: e.target.checked })}
        />
        <div className="grow">{todo.text}</div>
        <div>
          <Menu>
            <Menu.Button className={`invisible ${!disabled ? 'group-hover:visible' : ''} `} disabled={disabled}>
              <img src={dots} alt="" />
            </Menu.Button>
            <Menu.Items className="z-[1000] absolute p-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* NOTE: we will display this when update todo feature is needed */}
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setEditing(true)}
                    className={`invisible ${
                      active ? 'bg-primary text-white' : 'text-gray-900 '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <PencilIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Change
                  </button>
                )}
              </Menu.Item> */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => onDelete(todo.id)}
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

  if (create) {
    return (
      <button onClick={() => setEditing(true)} className="flex items-center gap-[20px] text-gray-500 font-semibold">
        <img src={add} alt="" className="ml-[4px] w-[16px] h-[16px]" />
        <div>Add</div>
      </button>
    )
  }

  return null
}
