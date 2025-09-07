import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo'

function Navbar() {
  return (
    <div className='flex items-center p-2 shadow-md'>
        <button className="text-2xl m-1">
        <FontAwesomeIcon icon={faBars} />
        </button>
        <Logo />
        <div className="ml-auto">
          <button className="text-2xl m-1">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </button>
        </div>
    </div>
  )
}

export default Navbar