import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'

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
