import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCtgV-5gKBOh4eGa_QOnyYVXJSLb4JgO7o",
  authDomain: "travfomo-2cebe.firebaseapp.com",
  projectId: "travfomo-2cebe",
  storageBucket: "travfomo-2cebe.appspot.com",
  messagingSenderId: "224963521137",
  appId: "1:224963521137:web:202048fe4ddaa98531c9d0",
  measurementId: "G-C1956VTLK7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()