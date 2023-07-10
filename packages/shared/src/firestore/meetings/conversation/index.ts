import { CollectionReference, DocumentData, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'

import { firestore } from '../..'

export type Message = {
  speaker: string
  language: string
  text: string
  timestamp: number
}

export type Conversation = Array<Message>

export class ConversationStore {
  private _db: CollectionReference<DocumentData>

  constructor() {
    this._db = collection(firestore, 'meetings')
  }

  public async add(mid: string, messages: Message[]) {
    return updateDoc(doc(this._db, mid), { conversation: arrayUnion(...messages) })
  }
}
