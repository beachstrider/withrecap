import { Unsubscribe } from 'firebase/auth'

import { FirebaseUser } from './firebase'

export interface BaseAuthProvider {
  login: () => Promise<void>
  logout: () => Promise<void>
  onAuthStateChanged: (callback: (user: FirebaseUser | null, token: string | null) => void) => Unsubscribe
}

export interface BaseIdentityAuthProvider {
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
  onAuthStateChanged: (callback: (user: FirebaseUser | null, token: string | null) => void) => Unsubscribe
}
