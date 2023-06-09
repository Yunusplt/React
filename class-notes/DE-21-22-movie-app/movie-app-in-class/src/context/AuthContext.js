import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import React from "react";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate()
  const createUser = async (email,password) => {
    try{
      let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toastSuccessNotify("Registered successfully")
    navigate("/")
    console.log(userCredential);
    } catch(error){
      console.log(error);
      toastErrorNotify(error.message)
    }

  };
const signIn = async (email,password)=>{
  try{
    await signInWithEmailAndPassword(auth,email,password)
    toastSuccessNotify("Logged in successfully")
    navigate("/")
  }catch(error){
    toastErrorNotify(error.message)
  }
}

  const logOut =()=>{
    signOut(auth)
    toastSuccessNotify("Logged out successfully")
  }
  const values = {createUser, signIn, logOut}
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
