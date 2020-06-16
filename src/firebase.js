//Configuracion de firebase
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDo4Q5x0fxZC6y87dMsZ3UoLJwHvCpi9rs",
    authDomain: "crud-personas-30b60.firebaseapp.com",
    databaseURL: "https://crud-personas-30b60.firebaseio.com",
    projectId: "crud-personas-30b60",
    storageBucket: "crud-personas-30b60.appspot.com",
    messagingSenderId: "734019484387",
    appId: "1:734019484387:web:8b9857040ac626d41663d6"
  };
  // Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
app.firestore().settings( {} );

export default app.firestore()