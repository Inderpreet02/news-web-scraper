const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
require('dotenv').config()


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.API_KEY,
  authDomain: "tinder-clone-afb30.firebaseapp.com",
  projectId: "tinder-clone-afb30",
  storageBucket: "tinder-clone-afb30.appspot.com",
  messagingSenderId: "1098015286709",
  appId: "1:1098015286709:web:6e04a8a34b3e74712ee5fc",
  measurementId: "G-YXB5GXM0LY",
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

module.exports = {
  db,
  firebase
}