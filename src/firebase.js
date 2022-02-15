import firebase from "firebase/app";
import "firebase/auth";

// chizi ke az firebase copy kareh eim ro einja paste mikonim
export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyASNW4SydLMLVtHR7SWechpiGvM3ouEziU",
    authDomain: "danygraam.firebaseapp.com",
    projectId: "danygraam",
    storageBucket: "danygraam.appspot.com",
    messagingSenderId: "55372658923",
    appId: "1:55372658923:web:2919917eaa152c905926ae"
  }).auth();



