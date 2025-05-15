// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"; // Use the latest version
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc, query, where, serverTimestamp, runTransaction } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK8kuk9OwyBrLEuZKGh-NSNXZnlmPtP9Q",
  authDomain: "billconveter-f85e0.firebaseapp.com",
  databaseURL: "https://billconveter-f85e0-default-rtdb.firebaseio.com",
  projectId: "billconveter-f85e0",
  storageBucket: "billconveter-f85e0.firebasestorage.app",
  messagingSenderId: "881799956840",
  appId: "1:881799956840:web:51c8caa0390cb582b9aedd",
  measurementId: "G-4DFCNL2BV7"
  // measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the instances you'll need in other files
export { db, storage, collection, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc, query, where, serverTimestamp, runTransaction, ref, uploadBytes, getDownloadURL, deleteObject };