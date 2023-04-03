import { User } from 'firebase/auth'
import { collection, doc, setDoc, getDoc, CollectionReference, DocumentData } from 'firebase/firestore'

import { firestore } from '../firestore'

export class Users {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'users')
  }

  public async exists(uid: string) {
    const document = await getDoc(doc(this._db, uid))

    return document.exists()
  }

  public async get(uid: string) {
    const document = await getDoc(doc(this._db, uid))

    return document.data()
  }

  public async insert(user: User) {
    return setDoc(doc(this._db, user.uid), {
      displayName: user.displayName || null,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid
    })
  }
}
