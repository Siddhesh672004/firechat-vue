// Modular SDK (Firebase v9+)
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD7GsdEOAgHQ9fJqBpX39enhk7h5x1YcZY",
  authDomain: "firevuechat-3d53b.firebaseapp.com",
  projectId: "firevuechat-3d53b",
  storageBucket: "firevuechat-3d53b.firebasestorage.app",
  messagingSenderId: "952241786723",
  appId: "1:952241786723:web:71d832f5148f9f6ba80d56"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
