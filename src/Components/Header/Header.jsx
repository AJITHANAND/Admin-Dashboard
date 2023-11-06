import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../Context/actions'

function Header() {
    const dispatch = useDispatch()

    const onToggle = () => {
        dispatch(toggleSidebar())
    }

    const darkMode = () => {
        const darkMode = document.querySelector('.dark-mode');
        document.body.classList.toggle('dark-mode-variables');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    }
    return (
        <>
            <div className='top-navBar'>
                <h1>Dashboard</h1>
                <div className="nav">
                    <button id='menu-btn' onClick={onToggle}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                    <div className="dark-mode" onClick={darkMode}>
                        <span className="material-symbols-outlined active">
                            light_mode
                        </span>
                        <span className="material-symbols-outlined">
                            dark_mode
                        </span>
                    </div>

                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Ajith</b></p>
                            <small className="text-muted">Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img src="https://avatars.githubusercontent.com/u/34955311" alt="profile image" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header