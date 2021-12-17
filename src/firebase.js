import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyC4aULJN8GQiWx5G6ND0xQlUna051qvwI4",
  authDomain: "waver-2ccc6.firebaseapp.com",
  projectId: "waver-2ccc6",
  storageBucket: "waver-2ccc6.appspot.com",
  messagingSenderId: "1072127082304",
  appId: "1:1072127082304:web:1fccecc5c76493580104a5"
}).auth();
