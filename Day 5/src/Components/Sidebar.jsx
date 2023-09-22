import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../Assests/css/style.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li> <a href='/dashboard'><span> <i class='bx bxs-dashboard'> </i> Dashboard </span> </a> </li>
        <li> <a href='/appendhome'><span> <i class='bx bxs-home-heart'> </i> Append Home </span> </a> </li>
        <li> <a href='/maintainance'><span> <i class='bx bxs-hard-hat'></i> Maintainance Schedule </span> </a> </li>
        <li> <a href=' '><span> <i class='bx bxs-credit-card'></i> Payment </span> </a> </li>
      </ul>
    </div>
  );
}

export default Sidebar;
