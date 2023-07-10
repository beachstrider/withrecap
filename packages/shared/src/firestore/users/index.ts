import { User as FirebaseUser } from 'firebase/auth'
import {
  CollectionReference,
  DocumentData,
  Timestamp,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore'

import { Timestamps, firestore } from '..'

type CustomUserConfigs = {
  // Add custom configurations here
  autoSharing: boolean
  timezone: string
}
type BaseUserConfigs = {
  uid: string
  email: string
  displayName: string
  photoURL: string
}

export type User = BaseUserConfigs & CustomUserConfigs & Timestamps

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

  public async create(user: FirebaseUser): Promise<User> {
    const createdUser: User = {
      uid: user.uid,
      email: user.email!,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      autoSharing: false,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      created: Timestamp.fromDate(new Date()),
      updated: Timestamp.fromDate(new Date())
    }

    await setDoc(doc(this._db, user.uid), createdUser)

    return createdUser
  }

  public async update(uid: string, user: Partial<BaseUserConfigs & CustomUserConfigs>) {
    const updatedUser: Partial<BaseUserConfigs & CustomUserConfigs> = {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    if (user.displayName) updatedUser['displayName'] = user.displayName
    if (user.photoURL) updatedUser['photoURL'] = user.photoURL
    if (user.autoSharing !== undefined) updatedUser['autoSharing'] = user.autoSharing

    return updateDoc(doc(this._db, uid), {
      ...updatedUser,
      updated: Timestamp.fromDate(new Date())
    })
  }
}
