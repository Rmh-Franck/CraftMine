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
  
  const testUser = async (username, password) => {
    
    const DocumentColRef = collection(db, "Users");
    const q = await query(DocumentColRef, where("username", "==", username), where("password", "==", password))
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot docs", querySnapshot.docs)
    const DocumentList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    //console.log('test user already exists', username, password, DocumentList);
    return DocumentList;
  };


  
  //testUser("jean", "1234")
  //testUser("jean", "honoré")

  const loginBTN = document.querySelector('#loginBTN')
const username = document.querySelector('#inputUsername')
const password = document.querySelector('#inputPassword')
const info = document.querySelector('#info')

let tempUser = testUser(username, password)
loginBTN.addEventListener('click', (tempUser) => {
  
  tempUser.forEach((slot)=>{
    if(username !=  slot.username || password != slot.password){
      info.innerHTML = `
        nom ou mot de passe incorrect
      `
    }
    else {
      Window.location.href = "Home.html";
    }
  })
})
export {tempUser}