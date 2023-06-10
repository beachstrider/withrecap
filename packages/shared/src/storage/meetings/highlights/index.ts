import { CollectionReference, DocumentData, collection, doc, getDoc } from 'firebase/firestore'

import { Meeting } from '..'
import { firestore } from '../../firestore'

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
