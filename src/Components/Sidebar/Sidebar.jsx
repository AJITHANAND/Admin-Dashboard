import React, { useEffect } from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../Context/actions'
function Sidebar() {
  const isOpen = useSelector(state => state.sidebar.isOpen)
  const dispatch = useDispatch()

    const onToggle = () => {
        dispatch(toggleSidebar())
    }
  return (
    
      <aside className={`${isOpen ?'open':''}`}>
        <div className="toggle">
          <div className="logo">
            <img src="images/dashboard.png" />
            <h2 className='primary'>Admin</h2>
          </div>

          <div className="close" id='close-btn'>
            <span className="material-symbols-outlined" onClick={onToggle}>
              close
            </span>
          </div>
        </div>

        <div className="sidebar">

          <a href="#" className='active'>
            <span className="material-symbols-outlined">
              dashboard
            </span>
            <h3>Dashboard</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              person_outline
            </span>
            <h3>User</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              receipt_long
            </span>
            <h3>History</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              insights
            </span>
            <h3>Analytics</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              mail_outline
            </span>
            <h3>Tickets</h3>
            <span className="message-count">10</span>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              inventory
            </span>
            <h3>Sale list</h3>
          </a>
          
          <a href="#">
            <span className="material-symbols-outlined">
              report
            </span>
            <h3>Reports</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              settings
            </span>
            <h3>Setting</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              logout
            </span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
  )
}

export default Sidebar