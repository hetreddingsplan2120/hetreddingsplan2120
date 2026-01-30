import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } 
from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// 🔥 jouw Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBEzQ6D31jLT126nHQg0ZA9ujG9OZpCdc8",
  authDomain: "hetreddingsplan2120.firebaseapp.com",
  projectId: "hetreddingsplan2120",
  storageBucket: "hetreddingsplan2120.firebasestorage.app",
  messagingSenderId: "395985552281",
  appId: "1:395985552281:web:72d233c8ddf5608e148908"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const postsDiv = document.getElementById("posts");

async function loadPosts() {
  const q = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  postsDiv.innerHTML = "";

  snapshot.forEach(docu => {
    const post = docu.data();

    postsDiv.innerHTML += `
      <article style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </article>
    `;
  });
}

loadPosts();
a