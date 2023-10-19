import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Dashboard from '../Components/Dashboard/Dashboard'

function Home() {
  return (
    <>
      <Sidebar />
      <div className='main-content'>
        <Dashboard />
      </div>
    </>
  )
}

export default Home