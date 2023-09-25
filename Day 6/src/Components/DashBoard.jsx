import React from 'react'

export default function DashBoard() {
    const maintenanceSchedules = [
        {
          id: 1,
          title: 'HVAC Servicing',
          endDate: '2023-09-25',
          status: 'completed',
        },
        {
          id: 2,
          title: 'Gutter Cleaning',
          endDate: '2023-10-02',
          status: 'notCompleted',
        },
        // Add more maintenance schedules as needed
      ];
    
      // Calculate the percentage of completed maintenance tasks
      const completedCount = maintenanceSchedules.filter(
        (schedule) => schedule.status === 'completed'
      ).length;
      const totalCount = maintenanceSchedules.length;
      const completionPercentage = (completedCount / totalCount) * 100;
    
      // Dummy data for upcoming reminders
      const upcomingReminders = [
        {
          id: 1,
          title: 'Pay Utility Bills',
          date: '2023-09-22',
        },
        {
          id: 2,
          title: 'Clean the right side of the lawn',
          date: '2023-09-23',
        },
        // Add more upcoming reminders as needed
      ];
  return (
    <div>
       <div className="user-dashboard">
        <div className="dashboard-section">
          <h2>Task</h2>
          <div className="bar-graph">
            <div
              className="bar"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p>
            {completedCount} out of {totalCount} tasks completed (
            {completionPercentage}%)
          </p>
        </div>

        <div className="dashboard-section">
          <h2>Upcoming Reminders</h2>
          <ul className="reminder-list">
            {upcomingReminders.map((reminder) => (
              <li key={reminder.id} className="reminder-item">
                <span>{reminder.title}</span>
                <span>Date: {reminder.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
