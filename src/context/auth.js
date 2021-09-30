import React, { useState, useEffect } from 'react';
import { useCookies, Cookies } from 'react-cookie';

export const AuthContext = React.createContext();

function Auth(props) {
  const cookies = new Cookies();
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let username = cookies.get('username');
    setUsername(username || null);
    let token = cookies.get('token');
    if (token) {
      setToken(token);
      setIsLoggedIn(true);
    }
  }, []);

  const state = {
    username,
    token,
    isLoggedIn,
    setUsername,
    setToken,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}

export default Auth;
