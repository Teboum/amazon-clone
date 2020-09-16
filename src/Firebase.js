import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWqx89kRbhzGwUmJ0n6GTxwJ1FX-VHTW8",
  authDomain: "e-clone-ceb8c.firebaseapp.com",
  databaseURL: "https://e-clone-ceb8c.firebaseio.com",
  projectId: "e-clone-ceb8c",
  storageBucket: "e-clone-ceb8c.appspot.com",
  messagingSenderId: "802297274468",
  appId: "1:802297274468:web:e44d3953e0f39d50d83f71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
