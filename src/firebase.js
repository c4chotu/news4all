import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcqwF0GPwKqqdr_SPaDRL8x2QHyZPqa1g",
    authDomain: "news4u-a1925.firebaseapp.com",
    projectId: "news4u-a1925",
    storageBucket: "news4u-a1925.appspot.com",
    messagingSenderId: "613170106203",
    appId: "1:613170106203:web:4899e5ef12445f0ad7147e",
    measurementId: "G-Y9YQPG20CB"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };