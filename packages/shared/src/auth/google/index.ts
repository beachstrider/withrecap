import { FirebaseApp } from 'firebase/app'
import {
  Auth,
  AuthError,
  GoogleAuthProvider as AuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signInWithRedirect,
  Unsubscribe
} from 'firebase/auth'

import { BaseAuthProvider, BaseIdentityAuthProvider } from '..'
import { firebase, FirebaseUser } from '../firebase'

// TODO: Add access token if necessary by following step 5 here:
// https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
export class GoogleAuthProvider implements BaseAuthProvider {
  private firebase: FirebaseApp
  public auth: Auth

  constructor() {
    this.firebase = firebase
    this.auth = getAuth(this.firebase)
  }

  private _addMissingData(user: FirebaseUser): FirebaseUser {
    const userData = { ...user }

    // Sometimes display name is null, but it is in providerData
    if (!user.displayName) {
      userData.displayName = user.providerData[0].displayName
    }

    return userData
  }

  public onAuthStateChanged = (callback: (user: FirebaseUser | null, token: string | null) => void): Unsubscribe => {
    return onAuthStateChanged(this.auth, (user) => {
      if (user) {
        user = this._addMissingData(user)
      }

      callback(user, null)
    })
  }

  /**
   * NOTE: We have an issue where we don't know which scopes was granted to us
   * since Firebase Authentication doesn't expose this information (even though
   * we request it using the custom parameter)
   * For reference: https://www.google.com/search?q=Firebase+Authentication+does+not+provide+the+%22granted+scopes%22
   *
   * Since the extension authentication mechanism rely on the Google Identity API
   * we are covered because it will request all missing scopes once the user installs it
   */

  public login = async () => {
    try {
      const provider = new AuthProvider()

      // Add scope to read signed in user info
      provider.addScope('https://www.googleapis.com/auth/userinfo.email')
      provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
      // Add scope to read user calendar events
      provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly')

      provider.setCustomParameters({
        include_granted_scopes: 'true'
      })

      await signInWithRedirect(this.auth, provider)
    } catch (err) {
      const error = err as AuthError

      throw new Error(`SSO ended with an error: ${error}`)
    }
  }

  public logout = async () => {
    return this.auth.signOut()
  }
}

export class GoogleIdentityAuthProvider implements BaseIdentityAuthProvider {
  public auth: Auth

  private firebase: FirebaseApp

  constructor() {
    this.firebase = firebase
    this.auth = getAuth(this.firebase)
  }

  public refreshIdentityToken = async () => {
    return new Promise<string>(async (resolve, reject) => {
      // NOTE: we have to remove old token when getting a new one
      await this.clearIdentityToken()

      chrome.identity.getAuthToken({ interactive: false }, async (identityToken) => {
        if (chrome.runtime.lastError || !identityToken) {
          return reject(`refreshing identity token ended with an error: ${JSON.stringify(chrome.runtime.lastError)}`)
        }

        await chrome.storage.sync.set({ identityToken })

        resolve(identityToken)
      })
    })
  }

  private clearIdentityToken = async () => {
    return new Promise(async (resolve) => {
      chrome.identity.clearAllCachedAuthTokens(async () => {
        await chrome.storage.sync.remove('identityToken')

        resolve(true)
      })
    })
  }

  private _addMissingData(user: FirebaseUser): FirebaseUser {
    const userData = { ...user }

    // Sometimes display name is null, but it is in providerData
    if (!user.displayName) {
      userData.displayName = user.providerData[0].displayName
    }

    return userData
  }

  public onAuthStateChanged = (callback: (user: FirebaseUser | null, token: string | null) => void): Unsubscribe => {
    return onAuthStateChanged(this.auth, async (user) => {
      console.debug(user ? 'authenticated' : 'unauthenticated')

      if (user) {
        user = this._addMissingData(user)

        const identityToken = await this.refreshIdentityToken()

        callback(user, identityToken)
      } else {
        callback(user, null)
      }
    })
  }

  public login = async (customToken?: string) => {
    try {
      await this.logout()

      await signInWithCustomToken(this.auth, customToken!)
    } catch (err) {
      const error = err as AuthError

      throw new Error(`logout ended with an error: ${error}`)
    }
  }

  public logout = async () => {
    await this.clearIdentityToken()
    await this.auth.signOut()
  }
}
