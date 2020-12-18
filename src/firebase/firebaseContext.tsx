import React, { createContext, ReactNode, useState, useEffect, Context, useContext } from 'react';

import { authentification } from './firebase';

type Props = {
  children: ReactNode;
};

type User = firebase.default.User | null | undefined;

type AuthentificationErros = {
  errorMessage: string;
  errorCode: string;
};

type AuthentificationContext = {
  currentUser: User;
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  authentificationErros: AuthentificationErros;
};

const defaultAuthentificationErros = {
  errorMessage: '',
  errorCode: '',
};

export const AuthContext: Context<AuthentificationContext> = createContext({} as AuthentificationContext);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [authentificationErros, setAuthentificationErros] = useState<AuthentificationErros>(defaultAuthentificationErros);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscriber = authentification.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscriber;
  }, []);

  const signup = async (email: string, password: string) => {
    return authentification.createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      setAuthentificationErros({ ...authentificationErros, errorCode: errorCode, errorMessage: errorMessage });
    });
  };

  const login = async (email: string, password: string) => {
    console.log(email, 'email');
    return authentification.signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, 'errorMessage');
      setAuthentificationErros({ ...authentificationErros, errorCode: errorCode, errorMessage: errorMessage });
    });
  };

  const logout = async () => {
    console.log('logou');
    return authentification.signOut().catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('logou');
      setAuthentificationErros({ ...authentificationErros, errorCode: errorCode, errorMessage: errorMessage });
    });
  };

  const authentificationApi: AuthentificationContext = {
    currentUser,
    signup,
    authentificationErros,
    login,
    logout,
  };

  return <AuthContext.Provider value={authentificationApi}>{!loading && children}</AuthContext.Provider>;
}
