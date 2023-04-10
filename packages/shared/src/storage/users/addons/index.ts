import { collection, doc, CollectionReference, DocumentData, setDoc, getDocs, getDoc } from 'firebase/firestore/lite'

import { firestore } from '../../firestore'

export type UserAddonConfig = {
  enabled: true
  url: string
  regex: string
}

export type UserAddons = {
  [id: string]: UserAddonConfig
}

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

  public async get(addonId: string): Promise<UserAddonConfig | undefined> {
    const document = await getDoc(doc(this._db, this.uid, 'addons', addonId))

    return document.data() as UserAddonConfig | undefined
  }

  public async insert(id: string, config: UserAddonConfig): Promise<void> {
    return setDoc(doc(this._db, this.uid, 'addons', id), config)
  }
}
