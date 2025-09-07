import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <>
      <FontAwesomeIcon icon={faClipboardUser} className='text-2xl' />
      <span className="font-bold text-2xl ml-1">Attendance Register</span>
    </>
  )
}


