// imports Gerais
import firebase from "firebase/app";
import "firebase/database";


// API do FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyABd5GELJ9Z5bGSVvcFseAtTTbnhzY4g4A",
    authDomain: "aula01-73881.firebaseapp.com",
    databaseURL: "https://aula01-73881-default-rtdb.firebaseio.com",
    projectId: "aula01-73881",
    storageBucket: "aula01-73881.appspot.com",
    messagingSenderId: "1041911099056",
    appId: "1:1041911099056:web:7cdf11c0bff91b9a599575",
    measurementId: "G-P4LFN5EK28"
  };

// puxando a conexão
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;