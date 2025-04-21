import React from 'react'
import NavbarComp from '../../components/NavbarComp/NavbarComp'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function MainLayout() {
  return (
    <>
      <NavbarComp/>
      <Outlet/>
      <Footer/>
    </>
  )
}
