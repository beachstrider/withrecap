import { FieldValue } from 'firebase-admin/firestore'

import { db } from '../../config'

// TODO: Copied from extension/common, refactor this
export type Entry = {
  speaker: string
  language: string
  text: string
  timestamp: number
}

export class Entries {
  constructor(private meetingId: string) {}

  public async insert(entry: Entry) {
    const doc = db.collection(`meetings`).doc(this.meetingId)

    await doc.update({
      dialogues: FieldValue.arrayUnion({ ...entry })
    })
  }
}
