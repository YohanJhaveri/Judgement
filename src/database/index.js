import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAtT0G5YL1ZUMgmFck4ZY1NshNFhXtAzdg",
  authDomain: "playdeclare.firebaseapp.com",
  databaseURL: "https://playdeclare.firebaseio.com",
  projectId: "playdeclare",
  storageBucket: "playdeclare.appspot.com",
  messagingSenderId: "194589744068",
  appId: "1:194589744068:web:06b263afd621a10aa86291",
});

const auth = app.auth();
const firestore = app.firestore();

export { auth, firestore };
