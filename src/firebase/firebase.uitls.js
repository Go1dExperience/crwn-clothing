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

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  // If user doesn't exist in database yet
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (error) {
      console.log("Error", error);
    }
  }
  return userRef;
};

export default firebase;
