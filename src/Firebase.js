
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDszhrUzsmzxHRqbMC27dbU0b_Tf8VPfCk",
  authDomain: "instintoanimalmengoli.firebaseapp.com",
  projectId: "instintoanimalmengoli",
  storageBucket: "instintoanimalmengoli.appspot.com",
  messagingSenderId: "324941529206",
  appId: "1:324941529206:web:fb43612e13d389d0c11f57"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
