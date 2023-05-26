import { FirebaseApp } from 'firebase/app'
import {
  Auth,
  AuthError,
  GoogleAuthProvider as AuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signInWithPopup,
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

      await signInWithPopup(this.auth, provider)
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
  private _accessToken: string | null = null

  private firebase: FirebaseApp
  public auth: Auth

  constructor() {
    this.firebase = firebase
    this.auth = getAuth(this.firebase)
  }

  public get accessToken() {
    return this._accessToken
  }

  private _getCustomToken = async () => {
    const { customToken } = await chrome.storage.sync.get()

    return customToken
  }

  private _updateCustomToken = async (token: string | null) => {
    return await chrome.storage.sync.set({ customToken: token })
  }

  private _addMissingData(user: FirebaseUser): FirebaseUser {
    const userData = { ...user }

    // Sometimes display name is null, but it is in providerData
    if (!user.displayName) {
      userData.displayName = user.providerData[0].displayName
    }

    return userData
  }

  private _login = async () => {
    return new Promise<string>(async (resolve, reject) => {
      chrome.identity.getAuthToken({ interactive: false }, (token) => {
        if (chrome.runtime.lastError || !token) {
          return reject(`SSO ended with an error: ${JSON.stringify(chrome.runtime.lastError)}`)
        }

        resolve(token)
      })
    })
  }

  public onAuthStateChanged = (callback: (user: FirebaseUser | null, token: string | null) => void): Unsubscribe => {
    return onAuthStateChanged(this.auth, (user) => {
      if (user) {
        user = this._addMissingData(user)

        if (this._accessToken === null) {
          this._login().then((token) => {
            this._accessToken = token
            callback(user, token)
          })
        } else {
          callback(user, this._accessToken || null)
        }
      } else {
        callback(user, null)
      }
    })
  }

  public login = async (token?: string) => {
    try {
      this._accessToken = await this._login()
      console.debug('---  this._accessToken:', this._accessToken)

      // Update _customToken if new token is coming
      if (token) {
        await this._updateCustomToken(token)
      }

      const customToken = await this._getCustomToken()
      console.debug('---  customToken:', customToken)

      if (customToken) {
        await signInWithCustomToken(this.auth, customToken)
      } else {
        throw new Error(`silent login failed because customToken is null.`)
      }
    } catch (err) {
      const error = err as AuthError

      throw new Error(`SSO ended with an error: ${error}`)
    }
  }

  public logout = async () => {
    await this.auth.signOut()
    await this._updateCustomToken(null)
  }
}
