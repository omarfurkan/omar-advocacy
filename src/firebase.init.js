// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5HR6Gw5AVIqm7TztQU6wGRft6oN1eenI",
    authDomain: "omar-advocacy.firebaseapp.com",
    projectId: "omar-advocacy",
    storageBucket: "omar-advocacy.appspot.com",
    messagingSenderId: "304771816629",
    appId: "1:304771816629:web:46edb04f27a35cc230b2fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;