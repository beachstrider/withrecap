import { collection, doc, updateDoc, getDoc, CollectionReference, DocumentData, arrayUnion } from 'firebase/firestore'

import { firestore } from '../../firestore'

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

  public async get(mid: string): Promise<Conversation> {
    const document = await getDoc(doc(this._db, mid, 'conversation'))

    return document.data() as Conversation
  }

  public async add(mid: string, message: Message) {
    return updateDoc(doc(this._db, mid), { conversation: arrayUnion(message) })
  }
}
