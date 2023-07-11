import { onDisconnect, ref, serverTimestamp, set } from 'firebase/database'

import { realtime } from '..'

export type Presence = {
  state: boolean
  last_changed: typeof serverTimestamp
}

export type Presences = { [mid: string]: Presence }

const encode = (email: string) => email.replace('.', ',')

export class PresenceStore {
  private db

  constructor(mid: string, email: string) {
    this.db = ref(realtime, `presences/${mid}/${encode(email)}`)
  }

  public async watch() {
    set(this.db, true)
    onDisconnect(this.db).remove()
  }
}
