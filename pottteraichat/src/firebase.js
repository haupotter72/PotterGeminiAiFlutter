// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBWl7Qx-zz-vBdmufX0_3Z9ZB9MPf0iSus",
//   authDomain: "hehe-73795.firebaseapp.com",
//   projectId: "hehe-73795",
//   storageBucket: "hehe-73795.appspot.com",
//   messagingSenderId: "533103948115",
//   appId: "1:533103948115:web:2d1c7f1ea6ae864adf31a6",
//   measurementId: "G-JF2BL82LJR",
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth();

// export { app, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqAE-jQhcGZBj7dgHJprB7Mbdw-W1Wx7c",
  authDomain: "auth-86190.firebaseapp.com",
  projectId: "auth-86190",
  storageBucket: "auth-86190.appspot.com",
  messagingSenderId: "580437400847",
  appId: "1:580437400847:web:6beb27f7df79321b64727a",
  measurementId: "G-WS7QZP17J4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
