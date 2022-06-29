// // Import the functions you need from the SDKs you need
// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';
// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyB3tip9wyDqXaHpq8rYOngYDK3EwEJNaLg",
//     authDomain: "upload-images-6314d.firebaseapp.com",
//     projectId: "upload-images-6314d",
//     storageBucket: "upload-images-6314d.appspot.com",
//     messagingSenderId: "850710011337",
//     appId: "1:850710011337:web:5f7023a2c39628920a1c18"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { projectStorage, projectFirestore, timestamp };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCchRiH16N3brz96R1eRSUYhsT8JlWboCY",
    authDomain: "uploadimages-6de92.firebaseapp.com",
    projectId: "uploadimages-6de92",
    storageBucket: "uploadimages-6de92.appspot.com",
    messagingSenderId: "936788726783",
    appId: "1:936788726783:web:c925e2ae4a840537394dca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);