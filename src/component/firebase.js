import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE1OYWmgX2uu8Bzmc8MOo5CKqDRel4q9U",
  authDomain: "disney-plus-clone-f5e70.firebaseapp.com",
  projectId: "disney-plus-clone-f5e70",
  storageBucket: "disney-plus-clone-f5e70.appspot.com",
  messagingSenderId: "244732996658",
  appId: "1:244732996658:web:aa9eedbc34ab646a77a02b",
  measurementId: "G-7E17TXM5EN"
};



// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export {auth, provider};
export default db;

