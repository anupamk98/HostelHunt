// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hostelhunt-7c509.firebaseapp.com",
  projectId: "hostelhunt-7c509",
  storageBucket: "hostelhunt-7c509.appspot.com",
  messagingSenderId: "113611336163",
  appId: "1:113611336163:web:af167efc3f65d3946698d6",
  measurementId: "G-ZNL9E9J5P4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
