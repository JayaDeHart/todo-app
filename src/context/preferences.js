import React from 'react';

export const PreferencesContext = React.createContext();

function Preferences(props) {
  const state = {
    showCompleted: true,
    pagination: 4,
    sortBy: 'assigned',
  };

  return (
    <PreferencesContext.Provider value={state}>
      {props.children}
    </PreferencesContext.Provider>
  );
}

export default Preferences;
