import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC-uOqAMLkYdYTy58ZnNUHlfAUac3mg6r4",
  authDomain: "crwn-clothing-e3246.firebaseapp.com",
  projectId: "crwn-clothing-e3246",
  storageBucket: "crwn-clothing-e3246.appspot.com",
  messagingSenderId: "57431720964",
  appId: "1:57431720964:web:4238618759600cba85e151",
  measurementId: "G-N7Z6P7LGD3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.credential.accessToken);
    });
};

export default firebase;
