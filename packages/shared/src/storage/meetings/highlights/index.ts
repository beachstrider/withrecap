import { CollectionReference, DocumentData, Timestamp, collection, doc, getDoc, updateDoc } from 'firebase/firestore'

import { Meeting } from '..'
import { Timestamps, firestore } from '../../firestore'

export type Highlight = {
  id: string
  speaker: string
  text: string
} & Timestamps

export type Highlights = Array<Highlight>

export type StoredHighlights = { [hid: string]: Omit<Highlight, 'id'> }

export class HighlightsStore {
  private _db: CollectionReference<DocumentData>

  constructor(private mid: string) {
    this._db = collection(firestore, 'meetings')
  }

  private async _list(): Promise<StoredHighlights> {
    const document = await getDoc(doc(this._db, this.mid))

    const data = document.data() as Meeting | undefined
    if (!document.exists || !data?.highlights) {
      return {}
    }

    return data.highlights as unknown as StoredHighlights
  }

  public async list(): Promise<Highlights> {
    const highlights = await this._list()

    // We have to sort the highlights since document fields have no guarantee of order
    return Object.entries(highlights)
      .map(([id, highlight]) => ({ id, ...highlight }))
      .sort((a, b) => a.created!.seconds - b.created!.seconds)
  }

  public async add(highlight: Highlight) {
    const { id, ...rest } = highlight

    return updateDoc(doc(this._db, this.mid), {
      [`highlights.${id}`]: {
        ...rest,
        created: Timestamp.fromDate(new Date()),
        updated: Timestamp.fromDate(new Date())
      }
    })
  }

  public async update(hid: string, highlight: Omit<Highlight, 'id'>) {
    return updateDoc(doc(this._db, this.mid), {
      [`highlights.${hid}`]: { ...highlight, updated: Timestamp.fromDate(new Date()) }
    })
  }

  public async delete(hid: string): Promise<void> {
    const highlights = await this._list()
    delete highlights[hid]

    return updateDoc(doc(this._db, this.mid), { highlights })
  }
}
