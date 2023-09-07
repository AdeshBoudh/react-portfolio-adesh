// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOc7TsUI3HdM6wY7dLgherRX_N4cGydOs",
  authDomain: "react-portfolio-react.firebaseapp.com",
  projectId: "react-portfolio-react",
  storageBucket: "react-portfolio-react.appspot.com",
  messagingSenderId: "66417736840",
  appId: "1:66417736840:web:bad425a8dc1dab6740733d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
