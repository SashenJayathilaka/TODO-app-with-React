// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeVmc5yMMGxvsS0iGbnQZxNNXPCykCQd0",
    authDomain: "todo-app-cp-f9fec.firebaseapp.com",
    projectId: "todo-app-cp-f9fec",
    storageBucket: "todo-app-cp-f9fec.appspot.com",
    messagingSenderId: "154257596664",
    appId: "1:154257596664:web:1e14f6886cf51d20f09b0d",
    measurementId: "G-7TZPM0Y0QS"
});

const db = firebaseApp.firestore();

export default db;