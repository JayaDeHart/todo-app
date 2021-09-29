import React, { useState, useEffect } from 'react';

export const PreferencesContext = React.createContext();

function Preferences(props) {
  const [pagination, setPagination] = useState(
    parseInt(localStorage.getItem('pagination')) || 4
  );
  const [showCompleted, setShowCompleted] = useState(
    localStorage.getItem('showComp') || true
  );
  console.log(localStorage.getItem('showComp'));
  let state = {
    setPagination,
    setShowCompleted,
    showCompleted,
    pagination,
    sortBy: 'assigned',
  };

  return (
    <PreferencesContext.Provider value={state}>
      {props.children}
    </PreferencesContext.Provider>
  );
}

export default Preferences;
