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
import { GoogleCalendarEvent } from '../../calendar/google'

export class MeetingStore {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'meetings')
  }

  public async exists(uid: string) {
    const document = await getDoc(doc(this._db, uid))

    return document.exists()
  }

  public async get(mid: string): Promise<GoogleCalendarEvent | undefined> {
    const document = await getDoc<GoogleCalendarEvent>(doc(this._db, mid))

    return document.data()
  }

  public async create(mid: string, meeting: GoogleCalendarEvent) {
    return setDoc(doc(this._db, mid), meeting)
  }

  public async update(mid: string, meeting: GoogleCalendarEvent) {
    return updateDoc(doc(this._db, mid), { ...meeting })
  }

  public async delete(mid: string) {
    return deleteDoc(doc(this._db, mid))
  }
}
