import {
  CollectionReference,
  DocumentData,
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc
} from 'firebase/firestore'

import { firestore } from '../firestore'

export type Addon = {
  url: string
  regex: string
  name: string
  available: boolean
  logo: string
  popular?: boolean
}
export type Addons = { [name: string]: Addon }

export class AddonStore {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'addons')
  }

  public async exists(id: string) {
    const document = await getDoc(doc(this._db, id))

    return document.exists()
  }

  public async get(id: string): Promise<Addon | undefined> {
    const document = await getDoc(doc(this._db, id))

    return document.data() as Addon
  }

  public async create(aid: string, addons: Addons): Promise<void> {
    return setDoc(doc(this._db, aid), {
      ...addons,
      created: Timestamp.fromDate(new Date()),
      updated: Timestamp.fromDate(new Date())
    })
  }

  public async list(): Promise<Addons> {
    const documents = await getDocs(this._db)

    const addons: Addons = {}
    documents.forEach((doc) => {
      addons[doc.id] = doc.data() as Addon
    })

    return addons
  }
}
