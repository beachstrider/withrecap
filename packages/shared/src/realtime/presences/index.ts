import { get, onDisconnect, onValue, ref, remove, set } from 'firebase/database'

import { realtime } from '..'
import { encode } from '../../utils/email'

export class PresenceStore {
  private _db
  private db

  constructor(mid: string, email: string) {
    this._db = ref(realtime, `presences/${mid}`)
    this.db = ref(realtime, `presences/${mid}/${encode(email)}`)
  }

  public async monitor() {
    const snapshot = await get(this._db)
    const presences = snapshot.val()

    let status

    if (presences === null) {
      status = true
    } else {
      status = !Object.values(presences).some((status) => status === true)
    }

    set(this.db, status)
    onDisconnect(this.db).remove()
  }

  public subscribe(callback: () => void) {
    return onValue(this.db, (snapshot) => {
      if (snapshot.val() === true) {
        callback()
      }
    })
  }

  public disconnect() {
    remove(this.db)
  }
}
