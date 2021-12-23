import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvAOfzum_j8WyVvgCgVVyJ6nrO8uuZI_c",
  authDomain: "programmazione-ii.firebaseapp.com",
  projectId: "programmazione-ii",
  storageBucket: "programmazione-ii.appspot.com",
  messagingSenderId: "29517220450",
  appId: "1:29517220450:web:7f463fa02b1ad6d7715f3b"
};

firebase.initializeApp(firebaseConfig);

export default firebase