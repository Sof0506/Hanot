// Import the functions you need from the SDKs you need
import {initializeApp,getApps,getApp} from "firebase/app"
import{getFirestore} from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import {getStorage} from "firebase/storage"
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2J94SJbysnaE9pbTwo10Zd8Q_ER1IyKY",
  authDomain: "hanut-app-b7d68.firebaseapp.com",
  projectId: "hanut-app-b7d68",
  storageBucket: "hanut-app-b7d68.appspot.com",
  messagingSenderId: "997189700534",
  appId: "1:997189700534:web:69ecd203bc5b5c11280f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };