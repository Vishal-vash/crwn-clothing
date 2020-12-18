import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-db-e9cb2.firebaseapp.com",
  projectId: "crwn-clothing-db-e9cb2",
  storageBucket: "crwn-clothing-db-e9cb2.appspot.com",
  messagingSenderId: "914036023370",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (authUser, additionalData) => {
    if(!authUser) return;

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const userSnapshot = await userRef.get();

    if(!userSnapshot.exists) {
        const { displayName, email } = authUser;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user ', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: "select_count" });
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export default firebase;
