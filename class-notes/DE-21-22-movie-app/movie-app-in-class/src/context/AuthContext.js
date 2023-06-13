import React, { useEffect, useState } from 'react'
 import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
 import {createContext} from 'react'
import { auth } from '../auth/firebase'
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from '../helpers/ToastNotify'
import { useNavigate } from 'react-router-dom'

 export const AuthContexxx = createContext()

//todo createUserWithEmailAndPassword ii register compenentinde kullanacagiz. o yuzden bu methodu createUserr a atiyoruz. daha sonra onu da registerde cagiriyooruz.. 
 
 
 const AuthContextProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState();
   let navigate = useNavigate();

   useEffect(() => {
     userObserver();
   }, []);
   console.log(currentUser);

   const createUserr = async (email, password, displayName) => {
     try {
       let userCredentiall = await createUserWithEmailAndPassword(
         auth,
         email,
         password
       );
       await updateProfile(auth.currentUser, {
        //  displayName: "Jane Q. User",
        // displayName key ve value degeri esit oldugu icin sadece displayname de yazilabilir.
        displayName:displayName,
       });
       console.log(displayName);
       toastSuccessNotify("Registered successfully");
       navigate("/");
       console.log(userCredentiall);
     } catch (error) {
       console.log(error);
       toastErrorNotify(error.message);
     }
   };
   //* https://console.firebase.google.com/
   //* => Authentication => sign-in-method => enable Email/Password
   //! Email/Password ile girişi enable yap
   const signIn = async (email, password) => {
     try {
       // mevcut kullanicin giris yapmasi icin kullanilan firebase methodu
       await signInWithEmailAndPassword(auth, email, password);
       toastSuccessNotify("Logged in successfully");
       navigate("/");
     } catch (error) {
       toastErrorNotify(error.message);
     }
   };

   const logOut = () => {
     signOut(auth);
     toastSuccessNotify("Logged out successfully");
   };

   const userObserver = () => {
     onAuthStateChanged(auth, (user) => {
       if (user) {
         const { email, displayName, photoURL } = user;
         setCurrentUser({ email, displayName, photoURL });
       } else {
         setCurrentUser(false);
       }
     });
   };
   //* https://console.firebase.google.com/
   //* => Authentication => sign-in-method => enable Google
   //! Google ile girişi enable yap
   //* => Authentication => settings => Authorized domains => add domain
   //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
   const signUpProvider = () => {
     //? Google ile giriş yapılması için kullanılan firebase metodu
     const provider = new GoogleAuthProvider();
     //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
     signInWithPopup(auth, provider)
       .then((result) => {
         console.log(result);
         toastSuccessNotify("Logged in successfully");
         navigate("/");
       })
       .catch((error) => {
         console.log(error);
         toastErrorNotify(error.message);
       });
   };

    const forgotPassword = (email) => {
      //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          toastWarnNotify("Please check your mail box!");
          // alert("Please check your mail box!");
        })
        .catch((err) => {
          toastErrorNotify(err.message);
          // alert(err.message);
          // ..
        });
    };

   const values = { createUserr, signIn, logOut, signUpProvider, currentUser,forgotPassword };
   return (
     <AuthContexxx.Provider value={values}>{children}</AuthContexxx.Provider>
   );
 }
 
 export default AuthContextProvider;