const logout = document.getElementById("logout");
 
import { auth } from "./firebase.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js"
import { getDoc, doc, collection, addDoc, serverTimeStamp, getDocs } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js"
 
const addPostBtn = document.getElementById("add-post")
const username = document.getElementById("username")
const postText = document.getElementById("post")
const postsContainer = document.getElementById("posts")
 
let allPostDocs = [];
 
const fetchAllPosts = async () => {
    try {
        const postsRef = collection(db, "posts")
        const allPosts = await getDocs(postsRef)
        console.log(allPosts.docs[0].data());
        allPostDocs = allPosts.map(doc => doc.data());
        printPosts();  
    } catch (error) {
        console.log(error);
    }
}
 
fetchAllPosts()
 
const printPosts = () => {
    allPostDocs.map(doc => {
    const text = document.createElement("p");
    text.innerText = doc.text;
    postsContainer.append(text);
})
}
 
addPostBtn.addEventListener("click", () => {
    try {
        const postsRef = collection(db, "posts")
        const postsDoc = addDoc(postsRef, {
            text: postText.value,
            created_at: serverTimeStamp
        });
        postText.value = ""
    } catch (error) {
        console.log(error);
    }
})
 
onAuthStateChanged(auth, async (currentUser) => {
    try {
    if (!currentUser) {
       return window.location.replace("index.html")
    }
    const userRef = doc(db, "users", currentUser.uid);
    const user = await getDoc(userRef)
    username.innerText = user.data().username;
   
} catch (error) {
    console.log(error);
}
})
 
logout.addEventListener("click", () => {
    signOut(auth)
 
})