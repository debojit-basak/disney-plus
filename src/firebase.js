// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCSiCS5XEb_FICYBINdKLxoWA0viCsPL-s",
    authDomain: "disney-clone-9c4dd.firebaseapp.com",
    projectId: "disney-clone-9c4dd",
    storageBucket: "disney-clone-9c4dd.appspot.com",
    messagingSenderId: "781678811631",
    appId: "1:781678811631:web:62a81dc2f12deb1884fe1a",
    measurementId: "G-5T8BLWQWHS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;