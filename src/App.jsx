import { HeroUIProvider} from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import AuthContextProvider from "./Contects/AuthContextProvider";

function App() {
  const router = createBrowserRouter([
    {path: '/' , element :<MainLayout/>,children:[
      {index:true , element:<Login/>},
      {path: 'signup' , element:<SignUp/>},
      {path: 'forgetpassword' , element:<ForgetPassword/>},
      {path: '*' , element:<NotFound/>},
    ]}
  ])
  return (
    <>
    <AuthContextProvider>
    <HeroUIProvider>
     <RouterProvider router={router}></RouterProvider>
     </HeroUIProvider>   
    </AuthContextProvider>
      
    </>
  )
}
export default App
