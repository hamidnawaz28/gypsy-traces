import { initializeApp, getApps, getApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC-FF1v06jPlinW11XROlISmfopv_dt0pk",
  authDomain: "portfolio-prod-473a8.firebaseapp.com",
  projectId: "portfolio-prod-473a8",
  storageBucket: "portfolio-prod-473a8.appspot.com",
  messagingSenderId: "551679729076",
  appId: "1:551679729076:web:0a7850ce7798958de866e1",
  measurementId: "G-JGMMW35F25",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;
