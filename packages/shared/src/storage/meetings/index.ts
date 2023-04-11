import {
  collection,
  doc,
  setDoc,
  getDoc,
  CollectionReference,
  DocumentData,
  updateDoc,
  deleteDoc
} from 'firebase/firestore/lite'

import { firestore } from '../firestore'

export type MeetingAttendee = {
  email: string
  name?: string
  avatar?: string
}
export type Meeting = {
  id: string
  mid: string
  attendees: Array<MeetingAttendee>
  start: string
  end: string
  link: string
  summary: string
}

export class MeetingStore {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'meetings')
  }

  public async exists(uid: string): Promise<boolean> {
    const document = await getDoc(doc(this._db, uid))

    return document.exists()
  }

  public async get(mid: string): Promise<Meeting | undefined> {
    const document = await getDoc(doc(this._db, mid))

    return document.data() as Meeting | undefined
  }

  public async create(mid: string, meeting: Meeting): Promise<void> {
    return setDoc(doc(this._db, mid), meeting)
  }

  public async delete(mid: string): Promise<void> {
    return deleteDoc(doc(this._db, mid))
  }
}
