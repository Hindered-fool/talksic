import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjWmKpINTt8IrVKZQjHzb9KR692Xqho0A",
  authDomain: "talksicv2.firebaseapp.com",
  projectId: "talksicv2",
  storageBucket: "talksicv2.appspot.com",
  messagingSenderId: "1038259100615",
  appId: "1:1038259100615:web:b87737b69c696eec8697e2"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
