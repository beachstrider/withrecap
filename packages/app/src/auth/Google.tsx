import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const provider = new GoogleAuthProvider()

// Add scope to read signed in user info
provider.addScope('https://www.googleapis.com/auth/userinfo.email')
// Add scope to read user calendar events
provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly')

export function signin() {
  signInWithRedirect(auth, provider)
}

export function signout() {
  signOut(auth)
}
