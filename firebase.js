import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPQz_9MJiPOzWSNjqYE3JBnIKIyJ2EmU4",
  authDomain: "nextjs-7b176.firebaseapp.com",
  projectId: "nextjs-7b176",
  storageBucket: "nextjs-7b176.appspot.com",
  messagingSenderId: "823314928719",
  appId: "1:823314928719:web:f67e6131a6c3f23329463a",
  measurementId: "G-DGTLJREKDX",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
