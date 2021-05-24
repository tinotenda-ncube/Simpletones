import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCI6IFWmRu8XqbLBmx3gAQsB-0ZEXR0Pwo",
    authDomain: "simpletones-b2abf.firebaseapp.com",
    projectId: "simpletones-b2abf",
    storageBucket: "simpletones-b2abf.appspot.com",
    messagingSenderId: "937440926877",
    appId: "1:937440926877:web:175c044357ed9b127a8874",
    measurementId: "G-097FNDNE85"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage = firebase.storage();

  export{db, auth, storage};