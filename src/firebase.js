import { initializeApp } from "firebase/app";


//to connect the firebase app to the firebase account 
const firebaseConfig = {
  apiKey: "AIzaSyCg0Bcay1lkx18u66f69HQzc4QKqUFWCng",
  authDomain: "app-5bd05.firebaseapp.com",
  projectId: "app-5bd05",
  storageBucket: "app-5bd05.firebasestorage.app",
  messagingSenderId: "319887334854",
  appId: "1:319887334854:web:15820958115e61074866c7",
  measurementId: "G-5CK1B7JY8W",
  databaseURL:"https://app-5bd05-default-rtdb.firebaseio.com",



};
export const app=initializeApp(firebaseConfig);