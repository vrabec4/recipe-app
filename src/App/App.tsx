import React from 'react';
import { Route } from 'react-router-dom';

import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Login } from '../Pages/Login/Login';
import SignUpForm from '../Pages/SignUp/SignUpForm';

import { AuthProvider } from '../firebase/firebaseContext';
import { PrivateRoute } from '../shared/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUpForm} />
      </div>
    </AuthProvider>
  );
}

export default App;
