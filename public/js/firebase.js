import { initializeApp } from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyDkLa1L9mKIpjIKStlZCKRbb12OHP4P7vs",
    authDomain: "blog-b1d8c.firebaseapp.com",
    projectId: "blog-b1d8c",
    storageBucket: "blog-b1d8c.appspot.com",
    messagingSenderId: "1053242091185",
    appId: "1:1053242091185:web:9d5fa52bdb9fed0fff2490",
    measurementId: "G-MPS4KJXE2M"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();