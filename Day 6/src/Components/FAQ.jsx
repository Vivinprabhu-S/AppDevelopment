import React from 'react';
import '../Assests/css/Footer.css';
import Footer from './Footer';

const Faq = () => {
  return (
    <div className='footer-list-container'>
     <div className='privacypolicy'>
      <div className='footer-main-heading'>Frequently Asked Question</div>
          <div className='footer-heading'>What is HOMEAGAIN application?</div>
          <p>MyHomeHelper App is a web application designed to simplify and streamline various aspects of managing and maintaining a home. It offers a range of features and functionalities to assist homeowners in organizing tasks, accessing services, and maintaining their property efficiently. </p>
          <div className='footer-heading'>What are the key components and features of MyHomeHelper App?</div>
          <p>MyHomeHelper App includes the following key components and features:
            <ul>
              <li>Task Management</li>
              <li>Service Provider Directory</li>
              <li>Digital Home Inventory</li>
              <li>Maintenance Schedules</li>      
              <li>Home Expenses Tracking</li>
            </ul>
          </p>
          <div className='footer-heading'>How can I use the Task Management feature?</div>
          <p>You can use the Task Management feature to create and manage tasks related to home maintenance, cleaning, repairs, and other chores. Users can set reminders, assign tasks to family members or service providers, and track the progress of each task.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Faq;
