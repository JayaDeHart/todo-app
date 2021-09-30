import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

function Auth(props) {
  useEffect(() => {}, []);

  const state = {
    username: null,
    token: null,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}

export default Auth;
