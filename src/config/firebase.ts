// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx-OgBVYWuf6v4Hm-3ifmCkoVxmD8YNXE",
  authDomain: "rankblaze-138f7.firebaseapp.com",
  databaseURL: "https://rankblaze-138f7-default-rtdb.firebaseio.com",
  projectId: "rankblaze-138f7",
  storageBucket: "rankblaze-138f7.firebasestorage.app",
  messagingSenderId: "680403545243",
  appId: "1:680403545243:web:30cf242c831c444c272a3e",
  measurementId: "G-9WDFHPN17P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
export default app;