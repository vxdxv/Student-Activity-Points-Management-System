import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar.jsx'
import SideBar from '../components/SideBar/SideBar.jsx'
import './layouts.css' 

const AdminLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
      <SideBar role="admin" />
      <Outlet />
    </div>
    </div>
  )
}

export default AdminLayout
