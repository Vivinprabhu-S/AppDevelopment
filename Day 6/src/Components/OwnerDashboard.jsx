import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../Assests/css/OwnerDashboard.css';

function OwnerDashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="user-dashboard">
        <div className="content">
          <div className="action-boxes">
            <div className="action-box-1">List of Home</div>
            <div className="action-box-2">List of Queries</div>
          </div>

          <table className="remainder-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Date</th>
                <th>Reminder</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023-09-22</td>
                <td>AC service</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2023-09-23</td>
                <td>Lawn cleaning</td>
                <td>Not Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;
