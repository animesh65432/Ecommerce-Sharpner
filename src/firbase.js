// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbSCDm7tHXG1fe6pvwrHzZJT_8CJda3Hw",
  authDomain: "project-f839b.firebaseapp.com",
  projectId: "project-f839b",
  storageBucket: "project-f839b.appspot.com",
  messagingSenderId: "185971747429",
  appId: "1:185971747429:web:c29f3bfc97ad2ed2a6348c",
  measurementId: "G-YSJCMMMZTM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
