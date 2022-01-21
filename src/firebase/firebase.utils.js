import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA1PSfE6fwA3PNOLTgvUkqRLf5AsfQWaS8",
  authDomain: "clothing-ecommerce-db-c68af.firebaseapp.com",
  projectId: "clothing-ecommerce-db-c68af",
  storageBucket: "clothing-ecommerce-db-c68af.appspot.com",
  messagingSenderId: "520378560099",
  appId: "1:520378560099:web:73cebea2a0c941dbea5256",
  measurementId: "G-GRY72WDLXQ",
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const{displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;