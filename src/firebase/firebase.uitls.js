import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdlU2_HSGcrNLf66vtmBNCxNKgpqmAUDY",
  authDomain: "crwn-db-533ff.firebaseapp.com",
  databaseURL: "https://crwn-db-533ff.firebaseio.com",
  projectId: "crwn-db-533ff",
  storageBucket: "crwn-db-533ff.appspot.com",
  messagingSenderId: "593282194597",
  appId: "1:593282194597:web:0d2cb886a79df52bfb414c",
  measurementId: "G-DZ362Z6G92",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
