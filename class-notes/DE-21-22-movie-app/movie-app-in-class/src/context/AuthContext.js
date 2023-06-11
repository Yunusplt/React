import React from 'react'
 import { createUserWithEmailAndPassword } from 'firebase/auth'
 import {createContext} from 'react'
import { auth } from '../auth/firebase'

 export const AuthContexxx = createContext()

//todo createUserWithEmailAndPassword ii register compenentinde kullanacagiz. o yuzden bu methodu createUserr a atiyoruz. daha sonra onu da registerde cagiriyooruz.. 
 
 
 const AuthContextProvider = ({children}) => {

    const createUserr = async(email,password)=>{
        try {
        let userCredentiall = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userCredentiall);
        } catch (error) {
            console.log(error);
        }

    }
    const values = {createUserr}
   return (
     <AuthContexxx.Provider value={values}>
        {children}
     </AuthContexxx.Provider>
   )
 }
 
 export default AuthContextProvider;