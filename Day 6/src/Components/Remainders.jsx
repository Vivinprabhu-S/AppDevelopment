import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../Assests/css/Remainders.css';

function Remainders() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    message: '',
    endDate: '',
    status: 'Not Completed',
  });

  const setTodayDate = () => {
    const currentDate = new Date().toLocaleDateString();
    setFormData({
      ...formData,
      date: currentDate,
    });
  };

  const [reminders, setReminders] = useState([
    {
      id: 1,
      date: '23-09-2023',
      title: 'Maintainance Schedule',
      message: 'Service Voltas AC',
      endDate: '27-09-2023',
      status: 'Not Completed',
    },
    {
      id: 2,
      date: '24-09-2023',
      title: 'Maintainance Schedule',
      message: 'Clean the right side of the lawn',
      endDate: '30-09-2023',
      status: 'Not Completed',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.title && formData.message && formData.endDate) {
      if (formData.id) {
        // If the form has an ID, it's an edit operation
        const updatedReminders = reminders.map((reminder) => {
          if (reminder.id === formData.id) {
            // Replace the existing reminder with the edited data
            return { ...formData };
          }
          return reminder;
        });
        setReminders(updatedReminders);
      } else {
        // Create a new reminder object with a unique ID
        const newReminder = {
          id: Date.now(), // Using timestamp as a unique ID
          ...formData,
        };
        // Add the new reminder to the reminders array
        setReminders([...reminders, newReminder]);
      }

      // Close the popup after submission
      setIsPopupOpen(false);

      // Reset the form fields
      setFormData({
        date: '',
        title: 'Task',
        message: '',
        endDate: '',
        status: 'Not Completed',
      });
    }
  };

  const handleEdit = (id) => {
    // Find the reminder to edit
    const reminderToEdit = reminders.find((reminder) => reminder.id === id);

    // Set the form data with the reminder details
    setFormData({
      ...reminderToEdit,
    });

    // Open the popup for editing
    setIsPopupOpen(true);
  };

  const handleDelete = (id) => {
    // Filter out the reminder to delete
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="remainders">
        <div className="content-remainders">
          <div
            className="add-task-button"
            onClick={() => {
              setIsPopupOpen(true);
              setTodayDate();
            }}
          >
            Add Task
          </div>
          <table className="remainder-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Message</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map((reminder) => (
                <tr key={reminder.id}>
                  <td>{reminder.date}</td>
                  <td>{reminder.title}</td>
                  <td>{reminder.message}</td>
                  <td>{reminder.endDate}</td>
                  <td>{reminder.status}</td>
                  <td>
                    <button className='edit-button' onClick={() => handleEdit(reminder.id)}>Edit</button>
                    <button className='delete-button' onClick={() => handleDelete(reminder.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <span
              className="close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </span>
            <h2>{formData.id ? 'Edit Task' : 'Add New Task'}</h2>
            <form>
              <label>Date:</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                readOnly
              />

              <label>Title:</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              >
                <option value="Task">Task</option>
                <option value="Maintainance Schedule">Maintainance Schedule</option>
                <option value="Other">Other</option>
              </select>

              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />

              <label>Status:</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>

              <button type="button" onClick={handleSubmit}>
                {formData.id ? 'Save Changes' : 'Add Task'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Remainders;
