
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA99XnfVJkfbZPtAvCkw0qROGa9MpemRic",
    authDomain: "register-form-d6f7c.firebaseapp.com",
    projectId: "register-form-d6f7c",
    storageBucket: "register-form-d6f7c.firebasestorage.app",
    messagingSenderId: "20194267259",
    appId: "1:20194267259:web:7440246dce61fec33d52de"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
