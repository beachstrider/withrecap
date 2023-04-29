import { FirebaseApp } from 'firebase/app'
import {
  Auth,
  AuthError,
  getAuth,
  GoogleAuthProvider as AuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithPopup,
  signInWithRedirect,
  Unsubscribe
} from 'firebase/auth'

import { BaseAuthProvider } from '..'
import { firebase, FirebaseUser } from '../firebase'

export class GoogleIdentityAuthProvider implements BaseAuthProvider {
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

  private _addMissingData(user: FirebaseUser): FirebaseUser {
    const userData = { ...user }

    // Sometimes display name is null, but it is in providerData
    if (!user.displayName) {
      userData.displayName = user.providerData[0].displayName
    }

    return userData
  }

  private _login = async (details: chrome.identity.TokenDetails) => {
    return new Promise<string>(async (resolve, reject) => {
      chrome.identity.getAuthToken(details, (token) => {
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
          this._login({ interactive: false }).then((token) => {
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

  public login = async ({ silent }: { silent: boolean } = { silent: false }) => {
    try {
      this._accessToken = await this._login({ interactive: !silent })
      await signInWithCredential(this.auth, AuthProvider.credential(null, this._accessToken))
    } catch (err) {
      const error = err as AuthError

      throw new Error(`SSO ended with an error: ${error}`)
    }
  }

  public logout = async () => {
    return this.auth.signOut()
  }
}

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

  public loginWithPopup = async () => {
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
