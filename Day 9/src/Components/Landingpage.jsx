import React from 'react'
import '../Assests/css/Landingpage.css';
import background from '../Assests/images/landing-video.mp4';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Landingpage = () => {

  const nav = useNavigate();
  return (
    <div>
      <div className="btn" onClick={()=>nav('/login')}><i class='bx bx-user'></i> House Owner</div>
      <div className="btn" onClick={()=>nav('/login-family')}><i class='bx bx-male-female'></i> Family</div>

      <video autoPlay loop playsInline muted className='back-video'>
        <source src={background} type="video/mp4" />
      </video>
      <Footer />
    </div>
  )
}

export default Landingpage;