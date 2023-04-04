import { collection, doc, getDoc, CollectionReference, DocumentData, setDoc, getDocs } from 'firebase/firestore'

import { firestore } from '../../firestore'

export type UserAddonConfig = {
  enabled: true
}

export type UserAddons = {
  [id: string]: UserAddonConfig
}

// TODO: Add converter
export class UserAddonStore {
  private _db: CollectionReference<DocumentData>

  constructor(public readonly uid: string) {
    this._db = collection(firestore, 'users')
  }

  public async list(): Promise<UserAddons> {
    const documents = await getDocs(collection(this._db, this.uid, 'addons'))
    const addons: UserAddons = {}
    documents.forEach((doc) => {
      addons[doc.id] = doc.data() as UserAddonConfig
    })

    return addons
  }

  public async insert(id: string): Promise<void> {
    const config: UserAddonConfig = { enabled: true }
    return setDoc(doc(this._db, this.uid, 'addons'), config)
  }
}
