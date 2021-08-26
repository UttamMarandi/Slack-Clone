
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyCAiE4KwJfGVLa4pI4N0fo_jGsrwWIE958",
  authDomain: "slack-clone-uttam.firebaseapp.com",
  projectId: "slack-clone-uttam",
  storageBucket: "slack-clone-uttam.appspot.com",
  messagingSenderId: "158955099952",
  appId: "1:158955099952:web:d8b0c9bba7c7e9773edaf5"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()


export {db }