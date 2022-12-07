// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqcj0MCiHw5zN3hhUMdS_9O6I6U6qUik",
  authDomain: "barden-nse.firebaseapp.com",
  projectId: "barden-nse",
  storageBucket: "barden-nse.appspot.com",
  messagingSenderId: "961179989396",
  appId: "1:961179989396:web:9c8538a9a730d34d280b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;