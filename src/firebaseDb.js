// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore}  from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey            : "Enter your api key",
    authDomain        : "enter your api domain",
    databaseURL       : "enter your database url",
    projectId         : "enter your project id",
    storageBucket     : "enter your storage bucket id",
    messagingSenderId : "enter your messaging sender id",
    appId             : "enter your app id",
    measurementId     : "enter your measurement id"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export const db = getFirestore(firebaseApp);
