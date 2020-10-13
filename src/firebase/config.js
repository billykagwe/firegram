import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.apiKey,
  databaseURL: process.env.apiKey,
  projectId: process.env.apiKey,
  storageBucket: process.env.apiKey,
  messagingSenderId: process.env.apiKey,
  appId: process.env.apiKey
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
