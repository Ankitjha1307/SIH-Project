import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardTeacher, faBell } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo'
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <div className='flex  items-center p-2 shadow-md bg-gray-100'>
        <button className="text-2xl m-1">
        <Sidebar />
        </button>
        <Logo />
        <div className="m-auto">
          <button className="m-1 font-bold bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded-md flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className='text-2xl mr-1'/>Welcome Admin
          </button>
        </div>
        <button className='ml-auto font-bold bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded-md flex items-center'>
           <FontAwesomeIcon icon={faBell} className='text-2xl mr-1'/> Notifications
        </button>
    </div>
  )
}

export default Navbar