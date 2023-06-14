import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Todo, Todos, TodosStore } from '../storage/meetings/todos'
import { useErrors } from './error'

export function useTodos(mid: string) {
  const todosStore = useMemo(() => new TodosStore(mid), [mid])

  const [data, setData] = useState<Todos>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { error, setError } = useErrors(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const todos = await todosStore.list()

      setData(todos)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while fetching the todos', err: err as Error })
    } finally {
      setLoading(false)
    }
  }, [todosStore, setError])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { todos: data, refresh, loading, error }
}

export function useTodo(mid: string) {
  const todosStore = useMemo(() => new TodosStore(mid), [mid])

  const [loading, setLoading] = useState<boolean>(true)

  const { error, setError } = useErrors(null)

  const addTodo = async (todo: Omit<Todo, 'id'>) => {
    try {
      setLoading(true)

      await todosStore.add({ id: uuid(), ...todo })
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while adding the todo', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  const deleteTodo = async (id: Todo['id']) => {
    try {
      setLoading(true)

      await todosStore.delete(id)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while deleting the todo', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  const updateTodo = async (id: Todo['id'], todo: Omit<Todo, 'id'>) => {
    try {
      setLoading(true)

      await todosStore.update(id, todo)
      setError(null)
    } catch (err) {
      setError({ message: 'An error occurred while updating the todo', err: err as Error })
    } finally {
      setLoading(false)
    }
  }

  return { addTodo, deleteTodo, updateTodo, loading, error }
}
