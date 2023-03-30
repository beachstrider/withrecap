import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import logo from '../../assets/img/logo.svg';
import './Popup.css';
import { GoogleAuth } from '../../utils/auth/google';
import { Users } from '../../utils/storage/users';

const google = new GoogleAuth();
const users = new Users();

const redirect = (url: string) => {
  let internalUrl = chrome.runtime.getURL(url);
  chrome.tabs.create({ url: internalUrl }, (_tab) => {
    console.debug(`New tab launched with ${internalUrl}`);
  });
};

const Popup = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    google.auth.onAuthStateChanged((u) => {
      if (u === null) {
        setUser(null);
        return redirect('onboarding.html');
      }

      users.exists(u.uid).then((exists) => {
        if (!exists) {
          users.insert(u).then(() => {
            setUser(u);
          });
        } else {
          setUser(u);
        }
      });
    });
  }, []);

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Handle errors
    await google.login();
  };

  const logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Handle errors
    await google.logout();
  };

  const body = () => {
    if (!!user) {
      return (
        <div>
          <h1>Signed in as {user.email}.</h1>
          <button onClick={logout}>Sign Out?</button>
        </div>
      );
    } else {
      return (
        <>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <button onClick={login}>Sign In with Google</button>
        </>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {body()}
    </div>
  );
};

export default Popup;
