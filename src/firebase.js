import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCtE8QHhx5rQ-udWv0ziCnJzY5npBt9qFo",
    authDomain: "clone-v2-e3212.firebaseapp.com",
    projectId: "clone-v2-e3212",
    storageBucket: "clone-v2-e3212.appspot.com",
    messagingSenderId: "401008019380",
    appId: "1:401008019380:web:f118e8317fbd310f7ed4e1",
    measurementId: "G-LEXQ5GT704"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
