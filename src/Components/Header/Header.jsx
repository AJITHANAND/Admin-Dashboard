import React from 'react'
import './Header.css'


function Header() {
    return (
        <>
            <div className='top-navBar'>
                <h1>Dashboard</h1>
                <div className="nav">
                    <button id='menu-btn'>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                    <div className="dark-mode">
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