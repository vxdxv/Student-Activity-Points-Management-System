import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'
<<<<<<< HEAD

const FaLayout = () => {
  return (
    <div>
        <div className="flex">
        <SideBar role="faculty" />
      <div className="flex-1">
        <NavBar />
        <Outlet />
      </div>
    </div>
    </div>
       
  )
}

export default FaLayout
=======
import './layouts.css' 

const StudentLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <div className="flex">
      <SideBar role="fa" />
      
    </div>
    </div>
  )
}

export default StudentLayout
>>>>>>> NEW-FINAL-MAIN
