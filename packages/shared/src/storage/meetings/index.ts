import {
  CollectionReference,
  DocumentData,
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore/lite'

import { Timestamps, firestore } from '../firestore'
import { type Conversation } from './conversation'

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
export type MeetingTodo = {
  id: string
  text: string
  completed: boolean
}
export type MeetingHighlight = {
  id: string
  speaker: string
  text: string
}
export type Meeting = {
  id: string
  mid: string
  // Note: Indexing attendees by email so it's easier to query and add rules in Firestore
  attendees: { [email: string]: MeetingAttendee }
  // Emails contains a list of attendees emails including the creator of the meeting
  // so it's easier to query and add rules in Firestore
  emails: string[]
  start: string
  end: string
  link: string
  title: string
  summary?: string
  ended?: boolean
  conversation: Conversation
  description?: string
  // A transcript is a conversation sanitized (duplicated and irrelevant messages are removed). See engine for more details
  transcript?: Conversation
  metadata?: MeetingMetadata
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
}
