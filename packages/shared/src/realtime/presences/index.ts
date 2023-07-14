import { get, onDisconnect, onValue, ref, remove, set } from 'firebase/database'
import { forEach as foreach, isEmpty, isEqual } from 'lodash'

import { realtime } from '..'
import { encode } from '../../utils/email'

export type Presences = {
  [email: string]: boolean
}

export class Presence {
  private db
  private _db
  private _email

  constructor(mid: string, email: string) {
    this._email = encode(email)
    this._db = ref(realtime, `presences/${mid}`)
    this.db = ref(realtime, `presences/${mid}/${encode(this._email)}`)
  }

  public async connect() {
    const snapshot = await get(this._db)
    const presences: Presences = snapshot.val() || {}
    const newPresences = { ...presences }

    if (!isEmpty(newPresences)) {
      foreach(newPresences, (_, key) => {
        newPresences[key] = false
      })
    }
    newPresences[this._email] = true

    if (!isEqual(presences, newPresences)) {
      await set(this._db, newPresences)
    }
  }

  public async disconnect() {
    await remove(this.db)
  }

  public async subscribe(callback: (isRecorder: boolean) => void) {
    await set(this.db, false)
    onDisconnect(this.db).remove()

    return onValue(this.db, (snapshot) => callback(snapshot.val()))
  }
}
