import { FirebaseApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider, Auth, Unsubscribe } from 'firebase/auth'

import { firebase, FirebaseUser } from '../firebase'
import { BaseAuthProvider } from '..'

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
      try {
        this._accessToken = await this._login({ interactive: !silent })
        await signInWithCredential(this.auth, GoogleAuthProvider.credential(null, this._accessToken))
      } catch (err) {
        throw new Error(`SSO ended with an error: ${err}`)
      }
    } catch (err) {
      throw new Error(`Could not persist auth in local storage: ${err}`)
    }
  }

  public logout = async () => {
    return this.auth.signOut()
  }
}
