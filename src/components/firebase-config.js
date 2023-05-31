import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACwpWQx2iJY8G3d5kZUKb_uhOljEMINSM",
  authDomain: "entertainment-web-app-9a10b.firebaseapp.com",
  projectId: "entertainment-web-app-9a10b",
  storageBucket: "entertainment-web-app-9a10b.appspot.com",
  messagingSenderId: "468372809959",
  appId: "1:468372809959:web:78c2bad7ae6f1cc9d99a42",
  measurementId: "G-1K6EW76BR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };