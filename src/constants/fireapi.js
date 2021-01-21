import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyD8O4ML7MUJlS6-ZHa9pBe3WG-Lv3zxkWU",
  authDomain: "newyorkcares-c6f36.firebaseapp.com",
  databaseURL: "https://newyorkcares-c6f36.firebaseio.com",
  projectId: "newyorkcares-c6f36",
  storageBucket: "newyorkcares-c6f36.appspot.com",
  messagingSenderId: "127272582929",
  appId: "1:127272582929:web:98d054c6c9d32e6ea3d6b0",
  measurementId: "G-QDWL2V1C68"
};

const firebaseApp = firebase.initializeApp(config);
export const fireAuth = firebaseApp.auth();
export const firestore = firebase.firestore();
