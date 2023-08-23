import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqF8pLFnZGAZ-07wAZzZCSpsb5FJ3lRj4",
  authDomain: "chat-d0c75.firebaseapp.com",
  projectId: "chat-d0c75",
  storageBucket: "chat-d0c75.appspot.com",
  messagingSenderId: "869777685417",
  appId: "1:869777685417:web:6756976477fafd431ee2b8",
  measurementId: "G-051YE4Z7DB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
