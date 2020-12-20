import React, { createContext, ReactNode, useState, useEffect, Context, useContext } from 'react';

import { authentification } from './firebase';

type Props = {
  children: ReactNode;
};

type User = firebase.default.User | null | undefined;

type AuthentificationContext = {
  currentUser: User;
};

export const AuthContext: Context<AuthentificationContext> = createContext({} as AuthentificationContext);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();
  useEffect(() => {
    authentification.onAuthStateChanged(setCurrentUser);
    console.log(currentUser, 'currentUser');
  }, []);

  const authentificationApi: AuthentificationContext = {
    currentUser,
  };

  return <AuthContext.Provider value={authentificationApi}>{children}</AuthContext.Provider>;
}
