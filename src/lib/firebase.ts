// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTSByfJkxM6rSS5TTUrGkkmPhbaAaXQDU",
  authDomain: "cyber-ed-in.firebaseapp.com",
  projectId: "cyber-ed-in",
  storageBucket: "cyber-ed-in.firebasestorage.app",
  messagingSenderId: "371490102147",
  appId: "1:371490102147:web:9aec1f4ba8b94c749fb4b6",
  measurementId: "G-E7JZ79T1ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Export the services you want to use
export { app, analytics, db, storage, auth };