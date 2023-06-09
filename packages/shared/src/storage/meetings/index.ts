import {
  CollectionReference,
  DocumentData,
  FieldValue,
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc
} from 'firebase/firestore'

import { Timestamps, firestore } from '../firestore'
import { type Conversation } from './conversation'
import { Highlights } from './highlights'
import { type Todos } from './todos'

export type MeetingAttendee = {
  email: string
  name?: string
  avatar?: string
}
export type MeetingMetadata = {
  percentage: { [speaker: string]: number }
  participants: number
  url: string
}
export type Meeting = {
  id: string
  mid: string
  // Note: Indexing attendees by email so it's easier to query and add rules in Firestore
  attendees: { [email: string]: MeetingAttendee }
  // Emails contains a list of attendees emails including the creator of the meeting
  // so it's easier to query and add rules in Firestore
  recorders?: string[] | FieldValue
  recorder?: string | FieldValue
  emails: string[]
  start: string
  end: string
  link: string
  title: string
  summary?: string
  ended: boolean
  processed: boolean
  conversation: Conversation
  description?: string
  metadata?: MeetingMetadata
  todos?: Todos
  highlights?: Highlights
} & Timestamps

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
    return setDoc(doc(this._db, mid), {
      ...meeting,
      created: Timestamp.fromDate(new Date()),
      updated: Timestamp.fromDate(new Date())
    })
  }

  public async update(mid: string, meeting: Partial<Meeting>): Promise<void> {
    return updateDoc(doc(this._db, mid), { ...meeting, updated: Timestamp.fromDate(new Date()) })
  }

  public async delete(mid: string): Promise<void> {
    return deleteDoc(doc(this._db, mid))
  }

  public subscribe(mid: string, callback: (meeting: Meeting | undefined) => void) {
    const docRef = doc(this._db, mid)

    return onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const meeting = snapshot.data() as Meeting
        callback(meeting)
      } else {
        callback(undefined)
      }
    })
  }
}
