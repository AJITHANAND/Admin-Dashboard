import React from 'react'
import "./Dashboard.css"
function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
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
    </main>
  )
}

export default Dashboard