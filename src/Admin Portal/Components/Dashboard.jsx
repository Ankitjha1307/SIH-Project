import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdCard, faChartLine, faChartSimple, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className='flex flex-wrap justify-center bg-gray-100 min-h-screen p-6'>
        <div className="card border border-blue-500 border-2 h-100 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faIdCard} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Overall Attendance Today: </h2>
                <p className='text-2xl font-bold text-center'>84%</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">View Details</button>
                </div>
            </div>
        </div>
        <div className="card border border-blue-500 border-2 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faChartLine} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Attendance Trend</h2>
                <p className='text-xl text-center'>Get data about attendance trends over time.</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">Get Trends</button>
                </div>
            </div>
        </div>
        <div className="card border border-blue-500 border-2 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faChartSimple} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Schoolwise Comparison</h2>
                <p className='text-xl text-center'>Compare attendance across different schools.</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">Compare</button>
                </div>
            </div>
        </div>
        <div className="card border border-blue-500 border-2 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faTriangleExclamation} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Alerts</h2>
                <p className='text-xl text-center'>View important alerts and notifications.</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">View Alerts</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard