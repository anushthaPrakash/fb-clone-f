// import firebase from "firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB4BGpRFfq0dCFZBI8xhBAjAQSC2dcCqdg",
    authDomain: "fb-clone-4b027.firebaseapp.com",
    projectId: "fb-clone-4b027",
    storageBucket: "fb-clone-4b027.appspot.com",
    messagingSenderId: "480351380868",
    appId: "1:480351380868:web:13bacc0ad2340f49fb29d1"
  };
  const app = firebase.initializeApp(firebaseConfig);
//   const app = firebase.apps.length ? firebase.initilizeApp(firebaseConfig):firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();
  export {db,storage};