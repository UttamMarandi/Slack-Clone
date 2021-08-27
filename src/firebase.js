
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCAiE4KwJfGVLa4pI4N0fo_jGsrwWIE958",
  authDomain: "slack-clone-uttam.firebaseapp.com",
  projectId: "slack-clone-uttam",
  storageBucket: "slack-clone-uttam.appspot.com",
  messagingSenderId: "158955099952",
  appId: "1:158955099952:web:d8b0c9bba7c7e9773edaf5"
};
// connects firebase to the app
const firebaseApp = firebase.initializeApp(firebaseConfig)

//connect database to our app
const db = firebaseApp.firestore()

//get authentication
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


//we need to export db and auth to have access to those outside this file
export {db, auth, provider}

//Bug FIxes
//1.Firebase module not found in src
//soluction(not worked) :checked the official documentation and follwed the process. App loaded but on sending data to db , new error : db.collection is not a function
//Solution : 
//checked the package.json and found firebase version to 9.10.0 , I think its not stable
//so rolled back to 8.10.0
//Now works 