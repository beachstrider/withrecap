import { Unsubscribe } from 'firebase/auth'

import { FirebaseUser } from './firebase'

export interface BaseAuthProvider {
  onAuthStateChanged: (callback: (user: FirebaseUser | null, token: string | null) => void) => Unsubscribe
  login: () => Promise<void>
  loginWithPopup?: () => Promise<void>
  logout: () => Promise<void>
}
