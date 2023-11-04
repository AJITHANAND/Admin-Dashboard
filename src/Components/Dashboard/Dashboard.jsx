import React from 'react'
import "./Dashboard.css"
import Header from '../Header/Header'
import PieChart from '../Chart/Pie/PieChart'
import { Orders } from '../../Constants/tempData'
function Dashboard() {

  return (
    <>


      <main>
        <Header />
        <div className="main-content">


          <div className="center-contents">
            <div className="dashboard">
              <div className="sales">
                <div className="status">
                  <div className="info">
                    <h3>Total Sales</h3>
                    <h1>$79,500</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx={38} cy={38} r={36} />
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
                      <circle cx={38} cy={38} r={36} />
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
                      <circle cx={38} cy={38} r={36} />
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
                      <circle cx={38} cy={38} r={36} />
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
                  <p>1 Day Ago</p>
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

            <div className='recent-orders'>
              <h2>Recent Orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Code Number</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Orders.map((order, idx) =>
                      <tr key={idx}>
                        <td>{order.productName}</td>
                        <td>{order.productNumber}</td>
                        <td>{order.paymentStatus}</td>
                        <td className={`${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}`}>{order.status}</td>
                        <td><a href="#">View</a></td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              <a href="#">Show All</a>
            </div>
          </div>

          <div className="right-section">
            <div className="charts">
              <h3>Visit by Traffic Types</h3>
              <PieChart />
            </div>

            <div className="reminders">
              <div className="header">
                <h2>Reminders</h2>
                <span className="material-symbols-outlined">
                  notifications_none
                </span>
              </div>

              <div className="notification">
                <div className="icon">
                  <span className="material-symbols-outlined">
                    volume_up
                  </span>
                </div>
                <div className="content">
                  <div className="info">
                    <h3>Workshop</h3>
                    <small className="text-muted">
                      10:30 AM - 12:45 PM
                    </small>
                  </div>
                  <span className="material-symbols-outlined">
                    more_vert
                  </span>
                </div>
              </div>



              <div className="notification deactivate">
                <div className="icon">
                  <span className="material-symbols-outlined">
                    edit
                  </span>
                </div>
                <div className="content">
                  <div className="info">
                    <h3>Workshop</h3>
                    <small className="text-muted">
                      10:30 AM - 12:45 PM
                    </small>
                  </div>
                  <span className="material-symbols-outlined">
                    more_vert
                  </span>
                </div>
              </div>


              <div className="notification add-reminder">
                <div>
                  <span className="material-symbols-outlined">
                    add
                  </span>
                  <h3>Add Reminder</h3>
                </div>
              </div>

            </div>


          </div>
        </div>

      </main>


    </>
  )
}

export default Dashboard