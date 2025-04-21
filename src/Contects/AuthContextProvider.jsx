import React, {  createContext, useState } from 'react'

const authContext = createContext()


export default function AuthContextProvider({children}) {

   const [isLogedIn , setIsLogedIn] = useState()
     
  return (
    <>
    <authContext.Provider value={{isLogedIn , setIsLogedIn}}>
    {children}
    </authContext.Provider>     
    </>
  )
}
