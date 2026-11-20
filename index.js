// Get HTML elements
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

import { auth, db } from "./firebase.js";

let isSigningIn = false;

// Check if user is already logged in
onAuthStateChanged(auth, async (currentuser) => {
    try {
        if (isSigningIn) {
        return;
    }

    if (currentuser) {
        window.location.replace("home.html");
    }
    }
    catch (error) {
        console.log(error);
    }
});

// Register user
submitBtn.addEventListener("click", async () => {
    isSigningIn = true;

    try {
        const userDoc = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        const userRef = doc(
            db,
            "users",
            userDoc.user.uid
        );

        await setDoc(userRef, {
            email: email.value,
            username: username.value,
            created_at: serverTimestamp()
        });

        window.location.replace("home.html");

    } catch (error) {
        console.log(error);
    }

    isSigningIn = false;
});
