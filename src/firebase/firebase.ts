import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseAppSetup = firebase.initializeApp({
  apiKey: 'AIzaSyD6htEMy4bVK3AU-BQglX_yJgCUypx6iIw',
  authDomain: process.env.RECIPE_APP_AUTH_DOMAIN_FIREBASE_KEY,
  databaseURL: process.env.RECIPE_APP_DATABASE_URL_FIREBASE_KEY,
  projectId: process.env.RECIPE_APP_PROJECT_ID_FIREBASE_KEY,
  storageBucket: process.env.RECIPE_APP_STORAGE_BUCKET_FIREBASE_KEY,
  messagingSenderId: process.env.RECIPE_APP_MESSAGING_SENDER_ID_FIREBASE_KEY,
  appId: process.env.RECIPE_APP_APP_ID_FIREBASE_KEY,
});

export const authentification = firebaseAppSetup.auth();
export default firebaseAppSetup;
