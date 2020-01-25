import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUtBJJO5aOygyZw3vVFgODSjNGyGyP4js",
    authDomain: "crown-fba-db.firebaseapp.com",
    databaseURL: "https://crown-fba-db.firebaseio.com",
    projectId: "crown-fba-db",
    storageBucket: "crown-fba-db.appspot.com",
    messagingSenderId: "421929345404",
    appId: "1:421929345404:web:648c5333131318146904f9",
    measurementId: "G-1MC1H9C2S8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;