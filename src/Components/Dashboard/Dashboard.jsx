import React from 'react'
import "./Dashboard.css"
import Header from '../Header/Header'
function Dashboard() {
  return (
    <main>
      <Header />
      <div className="dashboard">
        <div className="sales">
          <div className="status">
            <div className="info">
              <h3>Total Sales</h3>
              <h1>$79,500</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36}/>
              </svg>
              <div className="percentage">
                <p>+75%</p>
              </div>
            </div>

            
          </div>
        </div>


        <div className="visits">
          <div className="status">
            <div className="info">
              <h3>Site Visits</h3>
              <h1>15,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36}/>
              </svg>
              <div className="percentage">
                <p>-50%</p>
              </div>
            </div>

            
          </div>
        </div>


        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Searches</h3>
              <h1>48,578</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36}/>
              </svg>
              <div className="percentage">
                <p>+50%</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="leads">
          <div className="status">
            <div className="info">
              <h3>Leads</h3>
              <h1>10,154</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36}/>
              </svg>
              <div className="percentage">
                <p>+50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="new-users">
        <h2>New Users</h2>
        <div className="user-list">
          <div className="user">
            <img src="images/profile-2.jpg" alt="" />
            <h2>John</h2>
            <p>20 Min Ago</p>
          </div>
          <div className="user">
            <img src="images/profile-3.jpg" alt="" />
            <h2>Joe</h2>
            <p>15 Min Ago</p>
          </div>
          <div className="user">
            <img src="images/profile-4.jpg" alt="" />
            <h2>Jisoo</h2>
            <p>5 Hours Ago</p>
          </div>
          <div className="user">
            <img src="images/plus.png" alt="" />
            <h2>More</h2>
            <p>New Users</p>
          </div>
        </div>
      </div>

      
    </main>
  )
}

export default Dashboard