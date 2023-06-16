import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//todo firebaseConfig.com adresinden Build e tikla ardindan Authenticcation a tikla. acilan sayfada soldaki console da. Web e tikla altinda Get starter a tikla. oradaki kodu aldik ve buraya yapistirdik.
 //todo daha sonra. console.firebase.com a geri dön. project settings e gir. oradan firebasecongif syntaxini copy yap. 



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  TMDB_KEY: process.env.REACT_APP_TMDB_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
