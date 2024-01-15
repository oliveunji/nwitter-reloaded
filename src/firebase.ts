import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3-ji309wwqJwu9nHOsi8ieStalrKwKSM",
    authDomain: "nwitter-reloaded-6d990.firebaseapp.com",
    projectId: "nwitter-reloaded-6d990",
    storageBucket: "nwitter-reloaded-6d990.appspot.com",
    messagingSenderId: "811283263333",
    appId: "1:811283263333:web:700527fbaf8c82299f3b8c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
