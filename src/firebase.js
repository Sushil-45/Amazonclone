// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-RAZ_dMXngfA1AoUE3EPnxNU50bOnUvc",
  authDomain: "jitbackend-6ca09.firebaseapp.com",
  projectId: "jitbackend-6ca09",
  storageBucket: "jitbackend-6ca09.appspot.com",
  messagingSenderId: "553221525624",
  appId: "1:553221525624:web:0f3b50f021451e7cf6dd8d",
  measurementId: "G-0S06W2VJFW"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


export { db, auth};
