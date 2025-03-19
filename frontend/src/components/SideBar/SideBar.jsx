import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { useState,useContext } from 'react'
import assets from '../../assets/assets'
import {AuthContext} from '../../context/AuthContext'



const SideBar = ({role}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useContext(AuthContext);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handlelogout=()=>{
    logout() }
    const links=[
        {view:"admin",links:[
            {name:"Dashboard",url:"/admin/dashboard",image:assets.dashboard},
            {name:"Manage Users",url:"/admin/users",image:assets.users},
            {name:"Manage Activities",url:"/admin/activities",image:assets.activities},
            {name:"Guidelines",url:"/admin/guidelines",image:assets.guidelines},
        ]},
        {view:"student",links:[
            {name:"Dashboard",url:"/student/dashboard",image:assets.dashboard},
            {name:"Tracking",url:"/student/tracking",image:<i class="bi bi-radar"></i>},
            {name:"Activity History",url:"/student/activity-history",image:<i class="bi bi-hourglass-bottom"></i>},
            {name:"Activities",url:"/student/activities",image:<i class="bi bi-hourglass-bottom"></i>},
            {name:"Request Form",url:"/student/request-form",image:<i class="bi bi-file-earmark-text"></i>},
            {name:"Guidelines",url:"/student/guidelines",image:assets.guidelines},
        ]},
        {view:"fa",links:[
            {name:"Dashboard",url:"/fa/dashboard"},
            {name:"Approval",url:"/fa/approval"},
            {name:"Announcements",url:"/fa/announcements"},
            {name:"Activities",url:"/fa/activities"},
        ]},
       
    ]
  return (
    <div className='container'  style={{width: isOpen ? 'auto' : '75px'}}>
      <svg width={isOpen?"128":"45"}  onClick={toggleSidebar} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" rx="32" fill="url(#paint0_linear_469_1947)"/>
<path d="M106.213 60.993L100.798 55.5773C100.672 55.4516 100.523 55.3518 100.359 55.2838C100.194 55.2157 100.018 55.1807 99.8405 55.1807C99.6627 55.1807 99.4867 55.2157 99.3224 55.2838C99.1582 55.3518 99.0089 55.4516 98.8832 55.5773L93.4675 60.993C93.3418 61.1187 93.242 61.2679 93.174 61.4322C93.1059 61.5964 93.0709 61.7725 93.0709 61.9503V75.4895C93.0709 75.6673 93.1059 75.8434 93.1739 76.0077C93.2419 76.172 93.3416 76.3212 93.4674 76.447C93.5931 76.5727 93.7424 76.6724 93.9067 76.7405C94.071 76.8085 94.247 76.8435 94.4248 76.8434H105.256C105.434 76.8435 105.61 76.8085 105.774 76.7405C105.939 76.6724 106.088 76.5727 106.214 76.447C106.339 76.3212 106.439 76.172 106.507 76.0077C106.575 75.8434 106.61 75.6673 106.61 75.4895V61.9503C106.61 61.7725 106.575 61.5964 106.507 61.4322C106.439 61.2679 106.339 61.1187 106.213 60.993Z" fill="white"/>
<path d="M82.2395 44.3486H41.6217C41.4439 44.3486 41.2679 44.3836 41.1036 44.4516C40.9393 44.5196 40.79 44.6194 40.6643 44.7451C40.5385 44.8708 40.4388 45.0201 40.3708 45.1844C40.3028 45.3487 40.2678 45.5247 40.2678 45.7026V66.0114C40.2678 66.2691 40.3413 66.5215 40.4797 66.7388C40.6181 66.9562 40.8157 67.1295 41.0492 67.2384L61.3581 76.7159C61.5374 76.7995 61.7328 76.8428 61.9306 76.8428C62.1284 76.8428 62.3239 76.7995 62.5031 76.7159L82.812 67.2384C83.0456 67.1295 83.2431 66.9562 83.3816 66.7388C83.52 66.5215 83.5935 66.2691 83.5934 66.0114V45.7026C83.5935 45.5247 83.5585 45.3487 83.4905 45.1844C83.4224 45.0201 83.3227 44.8708 83.197 44.7451C83.0713 44.6194 82.922 44.5196 82.7577 44.4516C82.5934 44.3836 82.4173 44.3486 82.2395 44.3486Z" fill="white"/>
<path d="M82.2395 44.3486H41.6217C41.4439 44.3486 41.2679 44.3836 41.1036 44.4516C40.9393 44.5196 40.79 44.6194 40.6643 44.7451C40.5385 44.8708 40.4388 45.0201 40.3708 45.1844C40.3028 45.3487 40.2678 45.5247 40.2678 45.7026V58.7507L61.3581 68.5924C61.5374 68.676 61.7328 68.7193 61.9306 68.7193C62.1284 68.7193 62.3239 68.676 62.5031 68.5924L83.5934 58.7505V45.7026C83.5935 45.5247 83.5585 45.3487 83.4905 45.1844C83.4224 45.0201 83.3227 44.8708 83.197 44.7451C83.0713 44.6194 82.922 44.5196 82.7577 44.4516C82.5934 44.3836 82.4173 44.3486 82.2395 44.3486Z" fill="white"/>
<path d="M100.41 39.059L62.5004 21.458C62.3217 21.3756 62.1273 21.333 61.9305 21.333C61.7338 21.333 61.5394 21.3756 61.3607 21.458L23.4508 39.059C23.2166 39.1677 23.0183 39.3411 22.8794 39.5587C22.7405 39.7763 22.6667 40.0291 22.6667 40.2873C22.6667 40.5455 22.7405 40.7983 22.8794 41.0159C23.0183 41.2335 23.2166 41.4069 23.4508 41.5156L61.3607 59.1167C61.5392 59.1994 61.7337 59.2423 61.9305 59.2423C62.1273 59.2423 62.3218 59.1994 62.5004 59.1167L100.41 41.5156C100.644 41.4069 100.843 41.2335 100.982 41.0159C101.121 40.7983 101.194 40.5455 101.194 40.2873C101.194 40.0291 101.121 39.7763 100.982 39.5587C100.843 39.3411 100.644 39.1677 100.41 39.059Z" fill="white"/>
<path d="M99.8405 52.4728C99.6627 52.4729 99.4866 52.4379 99.3223 52.3699C99.158 52.3019 99.0088 52.2021 98.883 52.0764C98.7573 51.9507 98.6576 51.8014 98.5895 51.6371C98.5215 51.4728 98.4865 51.2967 98.4866 51.1189V41.6414H61.9306C61.5715 41.6414 61.2271 41.4988 60.9732 41.2449C60.7193 40.991 60.5767 40.6466 60.5767 40.2875C60.5767 39.9284 60.7193 39.5841 60.9732 39.3301C61.2271 39.0762 61.5715 38.9336 61.9306 38.9336H99.8405C100.018 38.9335 100.194 38.9685 100.359 39.0366C100.523 39.1046 100.672 39.2043 100.798 39.33C100.924 39.4558 101.023 39.6051 101.091 39.7693C101.159 39.9336 101.194 40.1097 101.194 40.2875V51.1189C101.194 51.2967 101.159 51.4728 101.091 51.6371C101.023 51.8014 100.924 51.9507 100.798 52.0764C100.672 52.2021 100.523 52.3019 100.359 52.3699C100.194 52.4379 100.018 52.4729 99.8405 52.4728Z" fill="white"/>
<path d="M99.8401 60.5961C102.831 60.5961 105.256 58.1714 105.256 55.1803C105.256 52.1893 102.831 49.7646 99.8401 49.7646C96.8491 49.7646 94.4244 52.1893 94.4244 55.1803C94.4244 58.1714 96.8491 60.5961 99.8401 60.5961Z" fill="white"/>
<path d="M88.7018 102.52C86.8883 102.026 84.9473 97.574 84.9473 91.7365C84.9473 85.899 86.8883 81.4472 88.7018 80.9527C89.0349 80.8618 89.3208 80.647 89.5008 80.3522C89.6808 80.0575 89.7415 79.7051 89.6703 79.3672C89.5991 79.0292 89.4015 78.7312 89.1178 78.5342C88.8342 78.3371 88.486 78.2558 88.1445 78.307L61.9306 82.2445L35.7082 78.3057L35.0445 78.2105C34.9807 78.2015 34.9164 78.1971 34.8521 78.1973C30.9926 78.1973 28.0825 84.0176 28.0825 91.7365C28.0825 99.4555 30.9926 105.276 34.8521 105.276C34.9164 105.276 34.9807 105.272 35.0445 105.263L61.9306 101.229L88.1444 105.166C88.4859 105.217 88.8341 105.136 89.1178 104.939C89.4014 104.742 89.599 104.444 89.6702 104.106C89.7414 103.768 89.6808 103.416 89.5007 103.121C89.3207 102.826 89.0349 102.611 88.7018 102.52Z" fill="white"/>
<path d="M67.346 79.5508H56.5146C55.7967 79.5516 55.1084 79.8372 54.6008 80.3448C54.0931 80.8524 53.8076 81.5407 53.8068 82.2586V106.629C53.8068 106.851 53.8611 107.068 53.9648 107.264C54.0685 107.459 54.2185 107.626 54.4018 107.751C54.585 107.875 54.7958 107.952 55.0158 107.976C55.2358 107.999 55.4583 107.969 55.6638 107.887L61.9303 105.38L68.1969 107.887C68.4023 107.969 68.6248 107.999 68.8448 107.976C69.0648 107.952 69.2756 107.875 69.4589 107.751C69.6421 107.626 69.7921 107.459 69.8958 107.264C69.9996 107.068 70.0538 106.851 70.0539 106.629V82.2586C70.053 81.5407 69.7675 80.8524 69.2598 80.3448C68.7522 79.8372 68.0639 79.5516 67.346 79.5508Z" fill="white"/>
<path d="M89.0088 78.1973C88.9444 78.1971 88.8801 78.2015 88.8164 78.2105L88.1526 78.3057C88.0974 78.3138 88.0426 78.3253 87.9887 78.3401C84.6032 79.2643 82.2391 84.7725 82.2391 91.7365C82.2391 98.7005 84.6032 104.209 87.9887 105.133C88.0426 105.148 88.0974 105.159 88.1526 105.167L88.8164 105.263C88.8801 105.272 88.9444 105.276 89.0088 105.276C92.8682 105.276 95.7784 99.4555 95.7784 91.7365C95.7784 84.0176 92.8682 78.1973 89.0088 78.1973Z" fill="white"/>
<path d="M86.3009 90.3828H82.2708C82.2507 90.8276 82.2391 91.2785 82.2391 91.7367C82.2391 98.7007 84.6032 104.209 87.9887 105.133C88.0426 105.148 88.0974 105.159 88.1526 105.168L88.8164 105.263C88.8801 105.272 88.9444 105.276 89.0088 105.276C89.4716 105.274 89.9303 105.189 90.3627 105.024V94.4446C90.3615 93.3677 89.9332 92.3353 89.1717 91.5738C88.4102 90.8123 87.3778 90.384 86.3009 90.3828Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_469_1947" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
<stop stop-color="#925FE2"/>
<stop offset="1" stop-color="#7042C0"/>
</linearGradient>
</defs>
</svg>
    <div className="shortcuts">
    {links.filter(e=>e.view==role).flatMap((e) => e.links).map((link,index)=>(
            <div className='shortcut' key={index} >
               {link.image}
                <Link to={link.url} key={index} style={{display: isOpen ? 'flex' : 'none'}} className="block py-2 px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700"> {link.name} </Link>
            </div>
            
      ))}
    </div>
    <div className='shortcuts' id="logout">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
    </svg>
                <button onClick={handlelogout} style={{display: isOpen ? 'flex' : 'none'}}>Logout</button>
    </div>
    </div>
  )
}

export default SideBar
