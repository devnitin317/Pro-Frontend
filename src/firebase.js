// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"; 
import { getAuth,GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXv4KNvuUjPWZjTQjk_htDyJKQl4wIYAw",
  authDomain: "pro-database-48640.firebaseapp.com",
  projectId: "pro-database-48640",
  storageBucket: "pro-database-48640.appspot.com",
  messagingSenderId: "157719706754",
  appId: "1:157719706754:web:93b1400f49d8f66529089b",
  measurementId: "G-73PP8X1Q4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export {db,storage,auth,googleProvider} 