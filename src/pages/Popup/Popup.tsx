import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import logo from '../../assets/img/logo.svg';
import './Popup.css';
import { GoogleAuth } from '../../utils/auth/google';

const google = new GoogleAuth();

const Popup = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // const init = () => {
    //   chrome.runtime.sendMessage(
    //     { message: 'is_user_signed_in' },
    //     function (response) {
    //       if (response.message === 'success' && response.payload) {
    //         window.location.replace('./main.html');
    //       }
    //     }
    //   );
    // };
  }, []);

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Handle errors
    await google.login();
    setUser(google.user);
  };

  const logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Handle errors
    await google.logout();
    setUser(null);
  };

  console.log('user', user);

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
