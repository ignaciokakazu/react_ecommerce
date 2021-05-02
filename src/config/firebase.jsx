import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAuB0ibKT2ktTeiiLGglGM9EbixMybWtzU",
    authDomain: "final-6aa3a.firebaseapp.com",
    projectId: "final-6aa3a",
    storageBucket: "final-6aa3a.appspot.com",
    messagingSenderId: "784602772205",
    appId: "1:784602772205:web:afba8b6ffcb64b8bb552e4",
    measurementId: "G-EWKDVCZ7WW"
});

export function getFirebase(){
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}

