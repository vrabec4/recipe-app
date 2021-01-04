import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseDevConfiguration = firebase.initializeApp({
  // Why env file don't work ?
  // Todo add also production configuration from firebase
  apiKey: 'AIzaSyD6htEMy4bVK3AU-BQglX_yJgCUypx6iIw',
  authDomain: 'cook-book-49a05.firebaseapp.com',
  databaseURL: 'https://cook-book-49a05.firebaseio.com',
  projectId: 'cook-book-49a05',
  storageBucket: 'cook-book-49a05.appspot.com',
  messagingSenderId: '1060695604231',
  appId: '1:1060695604231:web:04baf167aaf29a6472fea2',
  measurementId: 'G-YF0XDZL50M',
});

export const authentification = firebaseDevConfiguration.auth();
export const db = firebaseDevConfiguration.database();
export default firebaseDevConfiguration;
