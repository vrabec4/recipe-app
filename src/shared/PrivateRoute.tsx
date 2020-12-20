import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../firebase/firebaseContext';

export function PrivateRoute({ component: Component, ...rest }: RouteProps) {
  const { currentUser } = useAuthContext();
  if (!Component) return null;
  return <Route {...rest} render={props => (currentUser ? <Component {...props} /> : <Redirect to='/login' />)} />;
}
