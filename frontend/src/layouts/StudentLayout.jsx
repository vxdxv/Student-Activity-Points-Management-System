import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'

const StudentLayout = () => {
  return (
    <div>
        <div className="flex">
        <SideBar role="student" />
      <div className="flex-1">
        <NavBar />
        <Outlet />
      </div>
        </div>
      
    </div>
  )
}

export default StudentLayout
