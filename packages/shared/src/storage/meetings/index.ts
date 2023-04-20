import {
  CollectionReference,
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore/lite'

import { firestore } from '../firestore'
import { type Conversation } from './conversation'

export type MeetingAttendee = {
  email: string
  name?: string
  avatar?: string
  time?: number
}
export type MeetingMetadata = {
  percentage: { [speaker: string]: number }
}
export type Meeting = {
  id: string
  mid: string
  attendees: Array<MeetingAttendee>
  start: string
  end: string
  link: string
  title: string
  summary?: string
  ended?: boolean
  conversation: Conversation
  description?: string
  transcript?: Conversation
  metadata?: MeetingMetadata
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

  public async getByIds(mids: string[]): Promise<Meeting[]> {
    if (mids.length === 0) {
      return []
    }

    const q = query(this._db, where('mid', 'in', mids), orderBy('start', 'desc'))

    const documents = await getDocs(q)

    const meetings: Meeting[] = []
    documents.forEach((doc) => {
      const meeting = doc.data() as Meeting | undefined

      if (meeting) {
        meetings.push(meeting)
      }
    })

    return meetings
  }

  public async create(mid: string, meeting: Meeting): Promise<void> {
    return setDoc(doc(this._db, mid), meeting)
  }

  public async update(mid: string, meeting: Partial<Meeting>): Promise<void> {
    return updateDoc(doc(this._db, mid), { ...meeting })
  }

  public async delete(mid: string): Promise<void> {
    return deleteDoc(doc(this._db, mid))
  }
}
