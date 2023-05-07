import { collection, doc, CollectionReference, DocumentData, getDoc } from 'firebase/firestore/lite'

import { firestore } from '../../firestore'
import { Meeting } from '..'

export type Highlight = {
  speaker: string
  text: string
}

export type Highlights = Array<Highlight>

export class HighlightsStore {
  private _db: CollectionReference<DocumentData>

  constructor(private mid: string) {
    this._db = collection(firestore, 'meetings')
  }

  public async list(): Promise<Highlights> {
    const document = await getDoc(doc(this._db, this.mid))

    const data = document.data() as Meeting | undefined
    if (!document.exists || !data?.highlights) {
      return []
    }

    return data.highlights as Highlights
  }
}
