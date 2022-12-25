// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBzK0ooomNhIgScFHeEf20wy6R-Gya5tAw",
	authDomain: "chatapp-sic-22028.firebaseapp.com",
	projectId: "chatapp-sic-22028",
	storageBucket: "chatapp-sic-22028.appspot.com",
	messagingSenderId: "535460313510",
	appId: "1:535460313510:web:6f000cd9ef5c808e89f767",
	measurementId: "G-SE1S0E78LE"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
