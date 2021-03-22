import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDUD5qE5NmkjqO87J8EfqZFsFOhFpBHt8",
  authDomain: "eclectic-9f6f2.firebaseapp.com",
  projectId: "eclectic-9f6f2",
  storageBucket: "eclectic-9f6f2.appspot.com",
  messagingSenderId: "558585436877",
  appId: "1:558585436877:web:fd05c7d1df893a2047a784"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;
