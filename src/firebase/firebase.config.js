// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCliHQWRCBQFhgNfLtrC1U1bI7siYyB1qg",
  authDomain: "b9a9-real-estate-2244jhalak.firebaseapp.com",
  projectId: "b9a9-real-estate-2244jhalak",
  storageBucket: "b9a9-real-estate-2244jhalak.appspot.com",
  messagingSenderId: "125710135340",
  appId: "1:125710135340:web:9ba7d31585ce2608a3e189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;