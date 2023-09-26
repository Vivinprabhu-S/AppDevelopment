import React, { useEffect, useState } from 'react';
import '../Assests/css/Navbar.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/UserSlice';
import { logout } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';

function Navbar() {

  const user = useSelector(selectUser);
  const [id,setId] = useState('');
  useEffect(()=>{
    if(user){
      setId(user.name);
    }
    else{
      if(!id)
      {
        setId("Guest");
      }
    }
  },[user,id])

  const dispatch = useDispatch();

  const handleLogout=()=>{
    dispatch(logout());
  }

  return (
    <div className="navbar">
      <div className='home-again'>HOME-A-GAIN</div>
      <ul>
        <li><a href="/owner-dashboard">Home</a></li>
        <li>{id}</li>
        <li><a href="/" onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  );
}

export default Navbar;