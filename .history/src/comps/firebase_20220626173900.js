// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3tip9wyDqXaHpq8rYOngYDK3EwEJNaLg",
    authDomain: "upload-images-6314d.firebaseapp.com",
    databaseURL: "https://upload-images-6314d-default-rtdb.firebaseio.com",
    projectId: "upload-images-6314d",
    storageBucket: "upload-images-6314d.appspot.com",
    messagingSenderId: "850710011337",
    appId: "1:850710011337:web:5f7023a2c39628920a1c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);