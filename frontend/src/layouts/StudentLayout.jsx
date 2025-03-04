import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'

const StudentLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
      <SideBar role="student" />
      <Outlet />
    </div>
    </div>
  )
}

export default StudentLayout
