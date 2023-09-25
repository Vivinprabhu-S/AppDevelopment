import React from 'react';

import '../Assests/css/Sidebar.css'
import 'boxicons/css/boxicons.min.css';

import Navbar from './Navbar';

import DashBoard from './DashBoard';
import Appendhouse from './Appendhouse';
import Remainders from './Remainders';
import Serviceproviders from './Serviceproviders';
import Manageexpenses from './Manageexpenses';

import { useState } from 'react';

import '../Assests/css/OwnerDashboard.css';

function OwnerDashboard() {
  const [currPage, setCurrPage] = useState("dashboard");

  return (
    <div>
      <Navbar />
      <div className="sidebar">
      <ul>
        <li onClick={()=>setCurrPage("dashboard")}> <i class='bx bxs-dashboard' > </i> <span>  Dashboard </span> </li>
        <li onClick={()=>setCurrPage("append-house")}> <i class='bx bxs-home-heart'> </i> <span>  List of Houses </span>  </li>
        <li onClick={()=>setCurrPage("remainders")}> <i class='bx bxs-alarm' ></i> <span>  Remainders</span> </li>
        <li onClick={()=>setCurrPage("service-providers")}> <i class='bx bx-error-alt'></i> <span>  Service Providers </span>  </li>
        <li onClick={()=>setCurrPage('manage-expenses')}> <i class='bx bxs-dollar-circle' ></i> <span> Manage Expenses </span> </li>
      </ul>
    </div>
    {currPage === "dashboard" && <DashBoard/>}
    {currPage === "append-house" && <Appendhouse/>}
    {currPage === "remainders" && <Remainders/>}
    {currPage === "service-providers" && <Serviceproviders/>}
    {currPage === "manage-expenses" && <Manageexpenses/>}
 
    </div>
  );
}

export default OwnerDashboard;
