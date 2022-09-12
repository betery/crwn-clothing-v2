import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVbGuup5bbJiv6bPFZ0RX8dYXq5gtk0Y",
  authDomain: "crwn-clothing-db-f9151.firebaseapp.com",
  projectId: "crwn-clothing-db-f9151",
  storageBucket: "crwn-clothing-db-f9151.appspot.com",
  messagingSenderId: "223104029384",
  appId: "1:223104029384:web:c8d45e5bac78bb827f8bfd",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUsersDocumentFromAuth = async (userAuth) => {
  const usersDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(usersDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(usersDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("Have error in create data", error.message);
    }
  }

  return usersDocRef;
};
