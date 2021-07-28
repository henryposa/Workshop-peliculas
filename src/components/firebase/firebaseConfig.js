import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBbh1393sxKxGBgEnVHD-5-zcskqvieHks",
    authDomain: "examen-abc.firebaseapp.com",
    projectId: "examen-abc",
    storageBucket: "examen-abc.appspot.com",
    messagingSenderId: "114206980725",
    appId: "1:114206980725:web:1957b9a37ccfee0303d63c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const google = new firebase.auth.GoogleAuthProvider()

  export {
      db, 
      google, 
      firebase
  }