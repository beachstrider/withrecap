import { FirebaseApp } from 'firebase/app';
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  Auth,
} from 'firebase/auth';

import { firebase } from '../firebase';

export class GoogleAuth {
  public firebase: FirebaseApp;
  public auth: Auth;

  constructor() {
    this.firebase = firebase;
    this.auth = getAuth(this.firebase);
  }

  private _login = async (details: chrome.identity.TokenDetails) => {
    return new Promise<string>(async (resolve, reject) => {
      chrome.identity.getAuthToken(details, (token) => {
        if (chrome.runtime.lastError || !token) {
          return reject(
            `SSO ended with an error: ${JSON.stringify(
              chrome.runtime.lastError
            )}`
          );
        }

        resolve(token);
      });
    });
  };

  public login = async () => {
    try {
      await setPersistence(this.auth, browserLocalPersistence);

      try {
        const token = await this._login({});
        await signInWithCredential(
          this.auth,
          GoogleAuthProvider.credential(null, token)
        );
      } catch (err) {
        throw new Error(`SSO ended with an error: ${err}`);
      }
    } catch (err) {
      throw new Error(`Could not persist auth in local storage: ${err}`);
    }
  };

  public logout = async () => {
    return this.auth.signOut();
  };
}
