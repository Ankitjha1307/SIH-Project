import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUserTie} from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo'
import Sidebar from './Sidebar';
import Notifications from './Notifications';

function Navbar() {
  return (
    <div className='flex items-center p-2 shadow-md bg-gray-100'>
        <button className="text-2xl m-1">
        <Sidebar />
        </button>
        <Logo />
        <div className="m-auto">
          <button className="m-1 font-bold bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded-md flex items-center">
            <FontAwesomeIcon icon={faUserTie} className='text-2xl mr-1'/>Welcome Admin
          </button>
        </div>
        <button className='ml-auto items-center'>
           <Notifications />
        </button>
    </div>
  )
}

export default Navbar