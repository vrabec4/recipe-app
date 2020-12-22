import React from 'react';
import { Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from '../authentification/Login/Login';
import SignUpForm from '../authentification/SignUp/SignUpForm';

import { PrivateRoute } from '../shared/PrivateRoute';

function App() {
  return (
    <>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUpForm} />
    </>
  );
}

export default App;
