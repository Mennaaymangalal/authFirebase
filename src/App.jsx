import { HeroUIProvider} from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {path: '/' , element :<MainLayout/>,children:[
      {index:true , element:<Login/>},
      {path: 'signup' , element:<SignUp/>},
      {path: '*' , element:<NotFound/>},
    ]}
  ])
  return (
    <>
     <HeroUIProvider>
     <RouterProvider router={router}></RouterProvider>
     </HeroUIProvider>     
    </>
  )
}
export default App
