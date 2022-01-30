// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore}  from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey            : "AIzaSyAJ9x3ZyrZx-iewyJFmWw-fKOOZQ2puHsU",
    authDomain        : "vuefire-81703.firebaseapp.com",
    databaseURL       : "https://vuefire-81703.firebaseio.com",
    projectId         : "vuefire-81703",
    storageBucket     : "vuefire-81703.appspot.com",
    messagingSenderId : "501143060368",
    appId             : "1:501143060368:web:6d0285ed2547a7f21cfd15",
    measurementId     : "G-GMG863GCHZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export const db = getFirestore(firebaseApp);