import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const provider = new GoogleAuthProvider()

export function signin() {
  signInWithRedirect(auth, provider)
}

export function signout() {
  signOut(auth)
}
