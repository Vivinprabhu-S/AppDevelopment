import React from 'react';
import '../Assests/css/Footer.css';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className='footer-list-container'>
     <div className='privacypolicy'>
      <div className='footer-main-heading'>PRIVACY POLICY</div>
          <div className='footer-heading'>Who else can access your personal data</div>
          <p>We do not share your Personal Data with strangers. Personal Data about you is in some cases provided to our trusted partners in order to either make providing the service to you possible or to enhance your customer experience. </p>
          <div className='footer-heading'>How we secure our data</div>
          <p>We do our best to keep your Personal Data safe.  We use safe protocols for communication and transferring data (such as HTTPS). We use anonymising and pseudonymising where suitable. We monitor our systems for possible vulnerabilities and attacks. Even though we try our best we can not guarantee the security of information. However, we promise to notify suitable authorities of data breaches. We will also notify you if there is a threat to your rights or interests. We will do everything we reasonably can to prevent security breaches and to assist authorities should any breaches occur. If you have an account with us, note that you have to keep your username and password secret. </p>
          <div className='footer-heading'>Access</div>
          <p>We will do our utmost to ensure that availability of the website will be uninterrupted and that transmissions will be error-free. However, due to the nature of the Internet, this cannot be guaranteed. Also, your access to the website may be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services. We will attempt to limit the frequency and duration of any such suspension or restriction.</p>
          <div className='footer-heading'>Changes to the privacy Privacy Policy</div>
          <p>We reserve the right to make change to this Privacy Policy.</p>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy;
