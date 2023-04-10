import { collection, CollectionReference, DocumentData, getDocs, query, orderBy, limit } from 'firebase/firestore/lite'

import { firestore } from '../../firestore'

export type UserMeetingConfig = {
  date: string
}

export type UserMeetings = {
  [mid: string]: UserMeetingConfig
}

export class UserMeetingStore {
  private _db: CollectionReference<DocumentData>

  constructor(public readonly uid: string) {
    this._db = collection(firestore, 'users')
  }

  public async recent(): Promise<string | undefined> {
    const q = query(collection(this._db, this.uid, 'meetings'), orderBy('date', 'desc'), limit(1))
    const documents = await getDocs(q)

    let meetingId: string | undefined
    documents.forEach((doc) => {
      // Note: for some reason the id can contain trailing spaces at the beginning of the ID
      meetingId = doc.id.trim()
    })

    return meetingId
  }
}
