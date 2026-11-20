import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
 
const email = document.getElementById("email")
const password = document.getElementById("password")
const loginBtn = document.getElementById("login-btn")
 
let signingIn = false;
 
onAuthStateChanged(auth, (currenUser) => {
    if (currenUser && !signingIn) {
        window.location.replace("home.html")
    }
})
 
loginBtn.addEventListener("click", async () => {
    signingIn = true;
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        window.location.replace("home.html")
    } catch (error) {
        console.log(error);
    }
    signingIn = false;
})