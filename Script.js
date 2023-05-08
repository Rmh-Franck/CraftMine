// Import the functions you need from the SDKs you need
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


//Récupération des données
const getDocument = async (collectionName) => {
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await getDocs(DocumentColRef);
    const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return DocumentList
  }

  const getDataFirebase = async() => {
    const Games = await getDocument("Games")
    console.log("Games", Games)
    displayIcons(Games)
    displayGame(Games[0])
    const iconSelect = document.querySelectorAll('.icon')
    console.log("iconSelect", iconSelect)
    checkForSwitch(iconSelect, Games)

}
getDataFirebase()

let displayContainer = document.querySelector('#displayContainer')
let iconsContainer = document.querySelector('#iconsContainer')
console.log("container", iconsContainer)

const displayIcons = (gameList)=>{

  gameList.forEach((game)=>{
    iconsContainer.innerHTML += `
    <div class="icon flex w-80 items-center justify-between border-r-4 border-b-4 p-3 bg-gradient-to-r from-rose-800 hover:from-rose-600 hover:to-sky-950 to-sky-950 hover:border-0 cursor-pointer">
    <h1>${game.Title}</h1>
    <img src="${game.icone}"/>
    </div>
    `
  })

}

//Premier affichage principal
const displayGame = (gameObj) => {

      displayContainer.innerHTML = `
        <div class="flex-col justify-center items-center  text-white border-r-4 border-b-4 mx-60 my-10 p-8 bg-gradient-to-t from-amber-800 to-sky-950">
          <div class="flex justify-between mb-12">
            <h1 class="text-5xl box ml-11">${gameObj.Title}</h1>
            <p class="text-amber-500">${gameObj.Mode}</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="${gameObj.img}"/>
            <p>${gameObj.description}</p>
          </div>
      
        </div>
        
        `
  }

//Changement de l'affichage en foncyion des clicks
const checkForSwitch = (iconSelect, gameList)=>{
  iconSelect.forEach((icon, i)=>{
    icon.addEventListener('click', ()=>{
      displayContainer.innerHTML = `
        <div class="flex-col justify-center items-center  text-white border-r-4 border-b-4 mx-60 my-10 p-8 bg-gradient-to-t from-amber-800 to-sky-950">
          <div class="flex justify-between mb-12">
            <h1 class="text-5xl box ml-11">${gameList[i].Title}</h1>
            <p class="text-amber-500">${gameList[i].Mode}</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="${gameList[i].img}"/>
            <p>${gameList[i].description}</p>
          </div>
      
        </div>
        
        `

    })
  })

}

// fonction pour créer une collection (CREATE)
const createDocument = async (collectionName, newObj) => {
  console.log('createDocument', newObj)
  const DocumentColRef = collection(db, collectionName);
  const DocumentSnapshot = await addDoc(DocumentColRef, newObj);
}

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