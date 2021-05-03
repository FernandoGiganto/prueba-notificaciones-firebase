import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig  = {
    apiKey: "AIzaSyBW-3sTA5C555buRgnAT9Shryfg039oHP8",
    authDomain: "prueba-b0031.firebaseapp.com",
    projectId: "prueba-b0031",
    storageBucket: "prueba-b0031.appspot.com",
    messagingSenderId: "662473413232",
    appId: "1:662473413232:web:92a2755e508968f6365ab5"
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = initializedFirebaseApp.messaging();

/* messaging.usePublicVapidKey(
  "AIzaSyBW-3sTA5C555buRgnAT9Shryfg039oHP8"
); */

export { messaging };