import React from 'react';
import PreferencesContext from './context/preferences.js';
import ToDo from './components/todo/todo.js';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <PreferencesContext>
      <Router>
        <Switch>
          <Route path="/todo-app/login">
            <Login />
          </Route>
          <Route exact path="/todo-app/">
            <ToDo />
          </Route>
        </Switch>
      </Router>
    </PreferencesContext>
  );
};

export default App;
