import React from 'react';
import PreferencesContext from './context/preferences.js';
import ToDo from './components/todo/todo.js';

const App = () => {
  return (
    <PreferencesContext>
      <ToDo />
    </PreferencesContext>
  );
};

export default App;
