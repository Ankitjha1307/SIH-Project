import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Notifications() {
  return (
  <div className="drawer-end">
  <input id="Notifications" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="Notifications" className="btn bg-white text-blue-500 border border-blue-500 drawer-button"><FontAwesomeIcon icon={faBell} />Notifications</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="Notifications" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-blue-500 text-base-content min-h-full w-80 p-4">
      <li>No new notifications</li>
    </ul>
  </div>
</div>
  )
}

export default Notifications