import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBKwFpVFkbS00z-zXvp8_j-XhU5myHYPEs",
	authDomain: "newyorkcaresbeta.firebaseapp.com",
	projectId: "newyorkcares-c6f36"
};

const firebaseApp = firebase.initializeApp(config);

export const fireAuth = firebaseApp.auth();
