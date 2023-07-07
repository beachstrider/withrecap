import { firestore } from '../../firestore'
import { Meeting } from '../../meetings'
import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where
} from 'firebase/firestore'

export type UserMeetingConfig = {
  date: string
}

export type UserMeetings = {
  [mid: string]: UserMeetingConfig
}

export class UserMeetingStore {
  private _db: CollectionReference<DocumentData>

  constructor(private readonly email: string) {
    this._db = collection(firestore, 'meetings')
  }

  public async recent(): Promise<Meeting | undefined> {
    const q = query(this._db, where('emails', 'array-contains', this.email), orderBy('start', 'desc'), limit(1))
    const documents = await getDocs(q)

    let meeting: Meeting | undefined
    documents.forEach((doc) => {
      meeting = doc.data() as Meeting
    })

    return meeting
  }

  public async list(): Promise<Meeting[]> {
    const q = query(this._db, where('emails', 'array-contains', this.email), orderBy('start', 'desc'))
    const documents = await getDocs(q)

    const meetings: Meeting[] = []
    documents.forEach((doc) => {
      meetings.push(doc.data() as Meeting)
    })

    return meetings
  }
}
