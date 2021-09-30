import React from 'react';
import PreferencesContext from './context/preferences.js';
import AuthContext from './context/auth.js';
import ToDo from './components/todo/todo.js';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <AuthContext>
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
      </AuthContext>
    </CookiesProvider>
  );
};

export default App;
