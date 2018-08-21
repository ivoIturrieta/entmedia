import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCsMqbA8y9r2cwUo5ATN3qmbQ2Su2paaQk",
  authDomain: "enterpreneurv1.firebaseapp.com",
  databaseURL: "https://enterpreneurv1.firebaseio.com",
  projectId: "enterpreneurv1",
  storageBucket: "enterpreneurv1.appspot.com",
  messagingSenderId: "987492880121"
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth();

export const database = firebase.database();
