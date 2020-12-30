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
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user ", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const createCollectionsMap = (collectionsRef) => {
  const transformedCollections = collectionsRef.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();
    return {
      id: docSnapshot.id,
      routeName: title.toLowerCase(),
      title,
      items,
    };
  });

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: "select_count" });
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export default firebase;
