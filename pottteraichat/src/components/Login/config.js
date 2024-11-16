import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
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
export const db = getFirestore(app);
export { auth, provider };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider();

// export {auth,provider};
