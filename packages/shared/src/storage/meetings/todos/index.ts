import { CollectionReference, DocumentData, Timestamp, collection, doc, getDoc, updateDoc } from 'firebase/firestore'

import { Meeting } from '..'
import { Timestamps, firestore } from '../../firestore'

export type Todo = {
  id: string
  text: string
  completed: boolean
} & Timestamps
export type Todos = Array<Todo>

export type StoredTodos = { [tid: string]: Omit<Todo, 'id'> }

export class TodosStore {
  private _db: CollectionReference<DocumentData>

  constructor(private mid: string) {
    this._db = collection(firestore, 'meetings')
  }

  private async _list(): Promise<StoredTodos> {
    const document = await getDoc(doc(this._db, this.mid))

    const data = document.data() as Meeting | undefined
    if (!document.exists || !data?.todos) {
      return {}
    }

    return data.todos as unknown as StoredTodos
  }

  public async list(): Promise<Todos> {
    const todos = await this._list()

    // We have to sort the todos since document fields have no guarantee of order
    return Object.entries(todos)
      .map(([id, todo]) => ({ id, ...todo }))
      .sort((a, b) => a.created!.seconds - b.created!.seconds)
  }

  public async add(todo: Todo) {
    const { id, ...rest } = todo

    return updateDoc(doc(this._db, this.mid), {
      [`todos.${id}`]: {
        ...rest,
        created: Timestamp.fromDate(new Date()),
        updated: Timestamp.fromDate(new Date())
      }
    })
  }

  public async update(tid: string, todo: Omit<Todo, 'id'>) {
    return updateDoc(doc(this._db, this.mid), {
      [`todos.${tid}`]: { ...todo, updated: Timestamp.fromDate(new Date()) }
    })
  }

  public async delete(tid: string): Promise<void> {
    const todos = await this._list()
    delete todos[tid]

    return updateDoc(doc(this._db, this.mid), { todos })
  }
}
