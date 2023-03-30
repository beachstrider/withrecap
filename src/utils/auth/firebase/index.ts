import { FirebaseOptions, initializeApp } from 'firebase/app';
import 'firebase/compat/auth';

// TODO: Put this in env
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyD4E94nsyAL--9HTl8mdey5vNM5g41Sqds',
  authDomain: 'recap-dev-3c341.firebaseapp.com',
  projectId: 'recap-dev-3c341',
  storageBucket: 'recap-dev-3c341.appspot.com',
  messagingSenderId: '920065143357',
  appId: '1:920065143357:web:d6bf33c14c8cd073cbb054',
};

export const firebase = initializeApp(firebaseConfig);
