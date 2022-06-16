import "firebase/auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAORmfsgPPwuRDJaZ4tzFvd8ZlbKZ8S4tw",
  authDomain: "reactfirestore-5a2f2.firebaseapp.com",
  databaseURL: "https://reactfirestore-5a2f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactfirestore-5a2f2",
  storageBucket: "reactfirestore-5a2f2.appspot.com",
  messagingSenderId: "324283573894",
  appId: "1:324283573894:web:b466da16bc098d5cb85307",
  measurementId: "G-7TLK3JEL1F"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;