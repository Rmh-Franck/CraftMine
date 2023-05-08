import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7C6oDHc7JavA_Hfl8jZoEfWUGaIKTISY",
  authDomain: "theprojekt-1ad3a.firebaseapp.com",
  projectId: "theprojekt-1ad3a",
  storageBucket: "theprojekt-1ad3a.appspot.com",
  messagingSenderId: "288512532332",
  appId: "1:288512532332:web:8a865d947755ae423f5d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fonction pour créer une collection (CREATE)
const createDocument = async (collectionName, newObj) => {
    console.log('createDocument', newObj)
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await addDoc(DocumentColRef, newObj);
  }

  
//création de compte
const registerBTN = document.querySelector('#registerBTN')
const username = document.querySelector('#inputUsername')
const password = document.querySelector('#inputPassword')
const img = document.querySelector('#inputPP')
    
registerBTN.addEventListener('click', () => {
    createDocument("users", {
         name:  username.value, 
        password: password.value,
        img: img.value,
    })
})