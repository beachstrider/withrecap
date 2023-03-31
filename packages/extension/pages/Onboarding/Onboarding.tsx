import React from 'react';
// TODO: Isn´t compatible with Chrome Extension V3
// Will most likely have to implement auth on app that runs only outside extensions
// and share token with extension somehow. Having auth both on ext and app doesn't
// really work since ext relies on chrome.identity which doesn't work on Brave or with
// other OAuth2 providers other than Google.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth';

import { firebase } from '../../utils/auth/firebase';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/onboarding.html',
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={getAuth(firebase)}
      />
    </div>
  );
}

export default SignInScreen;
