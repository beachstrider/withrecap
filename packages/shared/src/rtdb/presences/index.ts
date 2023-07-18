import { get, ref as getRef, onDisconnect, onValue, remove, set } from 'firebase/database'
import { forEach as foreach, isEmpty, isEqual } from 'lodash'

import { rtdb } from '..'
import { encode } from '../../utils/email'

export type Presences = {
  [email: string]: boolean
}

export class PresencesRTDB {
  public async activate(mid: string, email: string) {
    const ref = getRef(rtdb, `presences/${mid}`)
    const snapshot = await get(ref)
    const presences: Presences = snapshot.val() || {}
    const newPresences = { ...presences }

    if (!isEmpty(newPresences)) {
      foreach(newPresences, (_, key) => {
        newPresences[key] = false
      })
    }
    newPresences[encode(email)] = true

    if (!isEqual(presences, newPresences)) {
      await set(ref, newPresences)
    }
  }

  public async delete(mid: string, email: string) {
    const ref = getRef(rtdb, `presences/${mid}/${encode(email)}`)
    await remove(ref)
  }

  public async subscribe(mid: string, email: string, callback: (isRecorder: boolean) => void) {
    const ref = getRef(rtdb, `presences/${mid}/${encode(email)}`)

    await set(ref, false)
    onDisconnect(ref).remove()

    return onValue(ref, (snapshot) => callback(snapshot.val()))
  }

  public async subscribeList(mid: string, callback: (presences: Presences) => void) {
    const ref = getRef(rtdb, `presences/${mid}`)
    return onValue(ref, (snapshot) => callback(snapshot.val()))
  }
}
