import React, { useState, useEffect } from 'react';

export const PreferencesContext = React.createContext();

function Preferences(props) {
  const [pagination, setPagination] = useState(4);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let initialPages = parseInt(localStorage.getItem('pagination')) || 4;
    setPagination(initialPages);
    let initShow = localStorage.getItem('showComp') || true;
    setShowCompleted(initShow);
  }, []);

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
