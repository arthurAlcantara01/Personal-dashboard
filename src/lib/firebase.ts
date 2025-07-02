import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClBbUKg1J4ZjlnUKtQO065rUSd24B3xwg",
  authDomain: "personal-dashboard-4bd08.firebaseapp.com",
  projectId: "personal-dashboard-4bd08",
  storageBucket: "personal-dashboard-4bd08.firebasestorage.app",
  messagingSenderId: "932785402209",
  appId: "1:932785402209:web:28801fcd25ba79b0755520",
  measurementId: "G-FRHVVNTGZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

