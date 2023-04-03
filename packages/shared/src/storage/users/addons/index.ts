import { collection, doc, getDoc, CollectionReference, DocumentData } from 'firebase/firestore'

import { firestore } from '../../firestore'

export type UserAddon = Map<
  string,
  {
    enabled: boolean
  }
>

export class UserAddons {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'users')
  }

  public async list(uid: string): Promise<UserAddon | undefined> {
    const document = await getDoc(doc(this._db, uid, 'addons'))

    return document.data() as UserAddon
  }
}
