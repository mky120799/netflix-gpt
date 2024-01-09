// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBOsYEdj7dOCXqqmMnOagxw1yBrMFEJ-c",
  authDomain: "netflix-gpt-893ae.firebaseapp.com",
  projectId: "netflix-gpt-893ae",
  storageBucket: "netflix-gpt-893ae.appspot.com",
  messagingSenderId: "920340519317",
  appId: "1:920340519317:web:f3d9359a50a53cb2017e9c",
  measurementId: "G-20YPR5G3GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();