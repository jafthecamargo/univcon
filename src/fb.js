import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
    "projectId": "univcon-64c3e",
    "appId": "1:736028375978:web:79c3fa40a3184accd209d3",
    "storageBucket": "univcon-64c3e.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDHVWitF2xzz8ue8ZW5XO3z-aJSLlAAV9o",
    "authDomain": "univcon-64c3e.firebaseapp.com",
    "messagingSenderId": "736028375978",
    "measurementId": "G-LN1R7DBDC8"
});