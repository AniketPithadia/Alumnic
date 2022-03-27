// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDG4dzhSlaCJqFGZp8c8Kjzl17ImgOA6FI",
//   authDomain: "sih-project-b1c12.firebaseapp.com",
//   projectId: "sih-project-b1c12",
//   storageBucket: "sih-project-b1c12.appspot.com",
//   messagingSenderId: "185395656794",
//   appId: "1:185395656794:web:ca5e14d08503c741af0063",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDG4dzhSlaCJqFGZp8c8Kjzl17ImgOA6FI",
  authDomain: "sih-project-b1c12.firebaseapp.com",
  projectId: "sih-project-b1c12",
  storageBucket: "sih-project-b1c12.appspot.com",
  messagingSenderId: "185395656794",
  appId: "1:185395656794:web:ca5e14d08503c741af0063",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
