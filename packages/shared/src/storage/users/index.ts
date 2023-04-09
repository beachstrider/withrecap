import { User as FirebaseUser } from 'firebase/auth'
import { collection, doc, setDoc, getDoc, CollectionReference, DocumentData, updateDoc } from 'firebase/firestore/lite'

import { firestore } from '../firestore'

type CustomUserConfigs = {
  // Add custom configurations here
  autoSharing: boolean
}
type BaseUserConfigs = Pick<FirebaseUser, 'displayName' | 'email' | 'uid' | 'photoURL'>

export type User = BaseUserConfigs & CustomUserConfigs

export class UserStore {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'users')
  }

  public async exists(uid: string) {
    const document = await getDoc(doc(this._db, uid))

    return document.exists()
  }

  public async get(uid: string): Promise<User> {
    const document = await getDoc(doc(this._db, uid))

    return document.data() as User
  }

  public async create(user: BaseUserConfigs) {
    return setDoc(doc(this._db, user.uid), {
      displayName: user.displayName || null,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      autoSharing: false
    })
  }

  public async update(uid: string, user: CustomUserConfigs) {
    return updateDoc(doc(this._db, uid), {
      autoSharing: user.autoSharing
    })
  }
}
