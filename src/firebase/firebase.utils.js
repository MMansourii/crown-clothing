import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBO18gRoCc5AQRZr5JIawbMwh5XQVyucis",
    authDomain: "crown-db-ce60a.firebaseapp.com",
    projectId: "crown-db-ce60a",
    storageBucket: "crown-db-ce60a.appspot.com",
    messagingSenderId: "255296351744",
    appId: "1:255296351744:web:36b82b4d0060e0ae0d32e5",
    measurementId: "G-4G9DXWRSE2"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName , email} = userAuth ;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase ;