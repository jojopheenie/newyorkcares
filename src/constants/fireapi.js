import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyD8O4ML7MUJlS6-ZHa9pBe3WG-Lv3zxkWU",
	authDomain: "newyorkcares-c6f36.web.app",
	projectId: "newyorkcares-c6f36"
};

const firebaseApp = firebase.initializeApp(config);

export const fireAuth = firebaseApp.auth();
