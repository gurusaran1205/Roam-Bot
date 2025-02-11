// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {ReactNativeAsyncStorage} from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuPSh4V8jB-ZiDnJbTH4kU-5F5gljuQSw",
  authDomain: "roambot-ai-planner.firebaseapp.com",
  projectId: "roambot-ai-planner",
  storageBucket: "roambot-ai-planner.firebasestorage.app",
  messagingSenderId: "602443606595",
  appId: "1:602443606595:web:27101ca2f88c536156c2f6",
  measurementId: "G-381LL6E81N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});