import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  Auth,
  User,
} from 'firebase/auth';
import 'firebase/compat/auth';

// TODO: Put this somewhere else
const firebaseConfig = {
  apiKey: 'AIzaSyD4E94nsyAL--9HTl8mdey5vNM5g41Sqds',
  authDomain: 'recap-dev-3c341.firebaseapp.com',
  projectId: 'recap-dev-3c341',
  storageBucket: 'recap-dev-3c341.appspot.com',
  messagingSenderId: '920065143357',
  appId: '1:920065143357:web:d6bf33c14c8cd073cbb054',
};

export class GoogleAuth {
  public firebase: FirebaseApp;
  public auth: Auth;
  public user: User | null = null;

  constructor() {
    this.firebase = initializeApp(firebaseConfig);
    this.auth = getAuth(this.firebase);
  }

  private _login = async () => {
    return new Promise<string>(async (resolve, reject) => {
      chrome.identity.getAuthToken({ interactive: true }, (token) => {
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
        const token = await this._login();
        await signInWithCredential(
          this.auth,
          GoogleAuthProvider.credential(null, token)
        );

        this.user = this.auth.currentUser;
      } catch (err) {
        throw new Error(`SSO ended with an error: ${err}`);
      }
    } catch (err) {
      throw new Error(`Could not persist auth in local storage: ${err}`);
    }
  };

  public logout = async () => {
    await this.auth.signOut();
    this.user = null;
  };
}
