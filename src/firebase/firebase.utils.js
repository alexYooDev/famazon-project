import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCbcDd55xBQViG23qAh2vMcnfsLOb2Cvto',
  authDomain: 'f-db-8358d.firebaseapp.com',
  projectId: 'f-db-8358d',
  storageBucket: 'f-db-8358d.appspot.com',
  messagingSenderId: '78296843989',
  appId: '1:78296843989:web:46e4d07cdedead473e045c',
  measurementId: 'G-S7449FFHT8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
