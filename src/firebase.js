import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKeXKf3qypUB2kF52EigrNYjEz3JV_Lh4",
  authDomain: "talksicmain.firebaseapp.com",
  projectId: "talksicmain",
  storageBucket: "talksicmain.appspot.com",
  messagingSenderId: "1012077248554",
  appId: "1:1012077248554:web:3eb0def22230482eb88353"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
