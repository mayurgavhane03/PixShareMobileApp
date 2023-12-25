// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi_xHp-_w5FXSqgtifL2wJBIjSJbd8b2k",
  authDomain: "pixsharemobileapp.firebaseapp.com",
  projectId: "pixsharemobileapp",
  storageBucket: "pixsharemobileapp.appspot.com",
  messagingSenderId: "132266588628",
  appId: "1:132266588628:web:17b47af213af0f2047fe41",
  measurementId: "G-2DL9PDF6WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// CLIENTS ID's

//IOS  : 745033895707-chd0q9hgao5iu05jln2huf8vsih8jkjt.apps.googleusercontent.com
//ANDROID :  745033895707-n5ofndevin6r1hu7ihinmdepb18uf8c5.apps.googleusercontent.com
//https://console.cloud.google.com/apis/credentials/oauthclient/132266588628-fg5ekuarlrriu8ep2qt3rgggv0l3hep0.apps.googleusercontent.com?project=pixsharemobileapp-407413


