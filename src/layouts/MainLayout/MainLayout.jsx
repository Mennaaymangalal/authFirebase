import React from 'react'
import NavbarComp from '../../components/NavbarComp/NavbarComp'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <>
      <NavbarComp/>
      <div className="container">
      <Outlet/>
      </div>
     
    </>
  )
}
