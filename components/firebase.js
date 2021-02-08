import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAchTLJsgOxaktUQWeHK8ASGwUm7yubMRY",
  authDomain: "tesla-clone-f353f.firebaseapp.com",
  projectId: "tesla-clone-f353f",
  storageBucket: "tesla-clone-f353f.appspot.com",
  messagingSenderId: "832423356857",
  appId: "1:832423356857:web:30effbbf451acdaf262e68",
  measurementId: "G-Q1WRERXRY4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
