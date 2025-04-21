import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, 
  Button,
} from "@heroui/react";
import { Link, NavLink } from "react-router-dom";


export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      "Login",
      "SignUp",       
    ];
  
  return (
    <>
         <Navbar  isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>         
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

      {
        menuItems.map((item , index)=>(
            <NavbarItem key={index}>
            <Link 
             to={ item == "Login" ? "/" : "/" + item.toLowerCase()}
             color="foreground" href="#">
             {
             item
             }
            </Link>
          </NavbarItem>
        ))
      }
     
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          <Link to={'/'} >Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button  color="primary" href="#" variant="flat">
           <NavLink to={'signup'}>
           Sign Up
           </NavLink>
          </Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item}-${index}`}>
            <NavLink
              to={ item == "Login" ? "/" : "/" + item.toLowerCase()}
              className="w-full"
              color={"foreground"}
              href="#"
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  )
}





