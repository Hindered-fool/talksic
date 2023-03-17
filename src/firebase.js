import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwEi6PysSQiWGbu4BIh-K0YPrfHHZRY9c",
  authDomain: "fir-9c156.firebaseapp.com",
  projectId: "fir-9c156",
  storageBucket: "fir-9c156.appspot.com",
  messagingSenderId: "260565933935",
  appId: "1:260565933935:web:71f1a87284cc605c69929a"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
