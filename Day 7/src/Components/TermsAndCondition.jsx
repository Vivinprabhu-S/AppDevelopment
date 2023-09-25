import React from 'react';
import '../Assests/css/Footer.css';
import Footer from './Footer';

const TermsAndCondition = () => {
    return (
    <div className='footer-list-container'>
      <div className='privacypolicy'>
        <div className='footer-main-heading'>TERMS AND CONDITION <span>Last updated: September 23th,2023</span></div>
        <div className='welcome-to-homeagain'>Welcome to Home-Again,</div>
          <div className='footer-heading'>User Responsibilities</div>
              <p>Users are responsible for their actions while using the website. Users are responsible for maintaining the confidentiality of their account credentials. Users may have the option to post, upload, or submit content to the website. Users retain ownership of their content but grant the website a license to use, display, and distribute the content.</p>
          <div className='footer-heading'>Prohibited Activities</div>
          <p>Users are prohibited from engaging in activities such as spamming, hacking, distributing malware, or any action that disrupts the service or violates the law.</p>
          <div className='footer-heading'> Privacy and Data Collection</div>
          <p>The website collects and processes user data as outlined in the Privacy Policy. Users should review the Privacy Policy to understand how their data is handled.</p>
      </div>
      <Footer/>
    </div>
  )
}
export default TermsAndCondition
