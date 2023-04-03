import { collection, doc, getDoc, CollectionReference, DocumentData } from 'firebase/firestore'

import { firestore } from '../firestore'

export type Addon = {
  url: string
}

export class Addons {
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
}
