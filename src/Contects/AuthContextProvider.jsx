import React, {  createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase'


const AuthContext = createContext()


export default function AuthContextProvider({children}) {

   const [CurrentUser , setCurrentUser] = useState()
   const [isLoading , setIsLoading] = useState(true)

   const signup = (email , password)=>{
   createUserWithEmailAndPassword(auth , email , password)
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
    <AuthContext.Provider value={{ CurrentUser , signup ,isLoading }}>
    {!isLoading && children}
    </AuthContext.Provider>     
    </>
  )
}

export const useAuth = () =>{
  return useContext(AuthContext)
}
