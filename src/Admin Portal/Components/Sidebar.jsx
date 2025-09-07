import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSchool, faChartSimple, faSquarePollVertical, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
  <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn bg-white text-blue-500 border border-blue-500 drawer-button"><FontAwesomeIcon icon={faBars} /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-blue-500 text-base-content min-h-full w-80 p-4">
      <li><a><FontAwesomeIcon icon={faSchool} className='mr-2' />Schools</a></li>
      <li><a><FontAwesomeIcon icon={faChartSimple} className='mr-2' />Analytics</a></li>
      <li><a><FontAwesomeIcon icon={faSquarePollVertical} className='mr-2' />Reports</a></li>
      <li><a><FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' />Alerts</a></li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar