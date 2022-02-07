import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCntm3m9CR3_RwX6EGkvTMvWQ0xp0cZP4U",
    authDomain: "tinderclone-fac92.firebaseapp.com",
    projectId: "tinderclone-fac92",
    storageBucket: "tinderclone-fac92.appspot.com",
    messagingSenderId: "503537817972",
    appId: "1:503537817972:web:49fef963a1511907e27421",
    measurementId: "G-QM44YBMHE2"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;