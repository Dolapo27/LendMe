import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {} from "../"
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmk3Nt6vJTWx-C0jiH7wZfu3QI_B-mOV8",
  authDomain: "lendme-3dfd7.firebaseapp.com",
  projectId: "lendme-3dfd7",
  storageBucket: "lendme-3dfd7.appspot.com",
  messagingSenderId: "581278503117",
  appId: "1:581278503117:web:d111ed672a3ed48808d984",
  measurementId: "G-3HFN7RTEBM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
