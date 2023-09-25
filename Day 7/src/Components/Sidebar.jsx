import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../Assests/css/Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const nav = useNavigate();

  return (
    <div className="sidebar">
      <ul>
        <li onClick={()=>nav('/owner-dashboard')}> <i class='bx bxs-dashboard' > </i> <span>  Dashboard </span> </li>
        <li onClick={()=>nav('/append-house')}> <i class='bx bxs-home-heart'> </i> <span>  List of Houses </span>  </li>
        <li onClick={()=>nav('/remainders')}> <i class='bx bxs-alarm' ></i> <span>  Remainders</span> </li>
        <li onClick={()=>nav('/service-providers')}> <i class='bx bx-error-alt'></i> <span>  Service Providers </span>  </li>
        <li onClick={()=>nav('/manage-expenses')}> <i class='bx bxs-dollar-circle' ></i> <span> Manage Expenses </span> </li>
      </ul>
    </div>
  );
}

export default Sidebar;
