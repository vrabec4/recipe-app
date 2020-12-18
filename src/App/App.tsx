import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Login } from '../Pages/Login/Login';
import { SignUpForm } from '../Pages/SignUp/SignUpForm';

import { AuthProvider } from '../firebase/firebaseContext';
import { PrivateRoute } from '../shared/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div>App</div>
    </AuthProvider>
  );
}

export default App;
