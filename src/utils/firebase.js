// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkI8ExBYzSAHeXyOTfZP4adbP9TyDqhf4",
  authDomain: "coder-react-74af5.firebaseapp.com",
  projectId: "coder-react-74af5",
  storageBucket: "coder-react-74af5.appspot.com",
  messagingSenderId: "771816130031",
  appId: "1:771816130031:web:ced947615658bd0bb5621a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
export const db = getFirestore(app)