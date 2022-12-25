// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAr-EdBHHr9LhPkr89MheHjWwUBFMbJVtM",
	authDomain: "chatapp-sic.firebaseapp.com",
	projectId: "chatapp-sic",
	storageBucket: "chatapp-sic.appspot.com",
	messagingSenderId: "482684988657",
	appId: "1:482684988657:web:aaaea70e1326fd71880d50",
	measurementId: "G-SWDPEHELSQ",
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
