import React, { useState } from 'react';
import '../Assests/css/Serviceproviders.css';

import cleaner from '../Assests/images/cleaner.jpg';
import electrician from '../Assests/images/eletrician.jpg';
import gardener from '../Assests/images/gardener.jpg';
import plumber from '../Assests/images/plumber.jpg';

// Define a mapping of services to mobile numbers
const serviceMobileNumbers = {
  'Gardener services': '+1234567890',
  'Cleaning services': '+9876543210',
  'Electrician services': '+1112223333',
  'Plumber services': '+4445556666',
};

const Serviceproviders = () => {

  const [selectedService, setSelectedService] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    appointmentDate: '',
  });

  const openPopup = (serviceName) => {
    setSelectedService(serviceName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleGetMobileNumber = () => {
    // Get the mobile number for the selected service
    const mobileNumber = serviceMobileNumbers[selectedService];
    if (mobileNumber) {
      alert(`Service: ${selectedService}\nMobile Number: ${mobileNumber}\nAppointment Date: ${formData.appointmentDate}`);
    } else {
      alert(`Mobile Number not available for ${selectedService}`);
    }
    closePopup();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="full-page-image">
        <div className="image-container">
          <img src={gardener} alt="gardener" />
          <p onClick={() => openPopup('Gardener services')}>Gardener services</p>
        </div>
      </div>    
      <div className="full-page-image">
        <div className="image-container">
          <img src={cleaner} alt="cleaner" />
          <p onClick={() => openPopup('Cleaning services')}>Cleaning services</p>
        </div>
      </div>
      <div className="full-page-image">
        <div className="image-container">
          <img src={electrician} alt="electrician" />
          <p onClick={() => openPopup('Electrician services')}>Electrician services</p>
        </div>
      </div>          
      <div className="full-page-image">
        <div className="image-container">
          <img src={plumber} alt="plumber" />
          <p onClick={() => openPopup('Plumber services')}>Plumber services</p>
        </div>
      </div>   

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>
            <h2>Get Mobile Number and Appointment Date</h2>
            <p>Service Name: {selectedService}</p>
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              required
            />
            <button onClick={handleGetMobileNumber}>Get</button>
          </div>
        </div>
      )}             
    </div>
  );
}

export default Serviceproviders;
