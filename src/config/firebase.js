import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbRl-H9UdtTl0dkcO0sQvc8QjZ_Dhj768",
    authDomain: "projektas-68d31.firebaseapp.com",
    databaseURL: "https://projektas-68d31.firebaseio.com",
    projectId: "projektas-68d31",
    storageBucket: "projektas-68d31.appspot.com",
    messagingSenderId: "96778084458",
    appId: "1:96778084458:web:52816e48e2954aa30eaa13",
    measurementId: "G-KYFZYJRD4W"
};

firebase.initializeApp(firebaseConfig);

export default firebase;