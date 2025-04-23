import React, {  createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword , onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'


const AuthContext = createContext()


export default function AuthContextProvider({children}) {

   const [currentUser , setCurrentUser] = useState()
   const [isLoading , setIsLoading] = useState(true)

   const signup = (email , password)=>{  
    return createUserWithEmailAndPassword(auth , email , password)
   }

   const signin = (email, password) =>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth , email)
   }
     
   useEffect(()=>{
   const unsubscribe  = onAuthStateChanged(auth , (user)=>{
      setCurrentUser(user)
      setIsLoading(false)
    })
    return()=>{
      unsubscribe()
     }
   },[])
  
  return (
    <>
    <AuthContext.Provider value={{ currentUser , signup , signin , resetPassword }}>
    {!isLoading && children}
    </AuthContext.Provider>     
    </>
  )
}

export const useAuth = () =>{
  return useContext(AuthContext)
}
