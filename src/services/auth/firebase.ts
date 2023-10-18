// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { useStore } from "../../store";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyPVxFC-vVxI4bpofxXfasQBrubk8ZvbQ",
    authDomain: "houndly-393501.firebaseapp.com",
    projectId: "houndly-393501",
    storageBucket: "houndly-393501.appspot.com",
    messagingSenderId: "826000921454",
    appId: "1:826000921454:web:59bb6364b19ad9055d677f",
    measurementId: "G-LBDGSXVCHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOut = () => {auth.signOut()};
export const onAuthStateChanged = (callback: (user: User | null) => void) => auth.onAuthStateChanged(callback);
export const currentUser = () => auth.currentUser;
export const getIdToken = () => currentUser()?.getIdToken();
export const getIdTokenResult = () => currentUser()?.getIdTokenResult();
export const getToken = () => getIdToken();
export const getTokenResult = () => getIdTokenResult();

// export const getTokenId = () => getIdTokenResult()?.tokenId;
// export const getTokenExpirationTime = () => getIdTokenResult()?.expirationTime;
// export const getTokenIssuedAtTime = () => getIdTokenResult()?.issuedAtTime;