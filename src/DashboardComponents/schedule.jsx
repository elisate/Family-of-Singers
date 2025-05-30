import React, { useState } from 'react';
import '../DashboardComponents/dashboardStyles/schedule.css';

const ScheduleDashboard = () => {
  const [viewMode, setViewMode] = useState('month');
  const [currentMonth, setCurrentMonth] = useState('March 2025');
  const [filterActive, setFilterActive] = useState('rehearsals');
  
  // Sample events data
  const events = [
    { 
      id: 1, 
      title: 'Orchestra Rehearsal', 
      date: 'Tomorrow', 
      time: '6:00 PM',
      type: 'rehearsals',
      color: 'blue'
    },
    { 
      id: 2, 
      title: 'Spring Concert', 
      date: 'Mar, 15, 2025', 
      time: '7:00 PM',
      type: 'performances',
      color: 'green'
    },
    { 
      id: 3, 
      title: 'Staff Meeting', 
      date: 'Mar, 20, 2025', 
      time: '5:00 PM',
      type: 'meetings',
      color: 'orange'
    }
  ];

  // Calendar data
  const calendarData = [
    { day: 25, date: null, events: [] },
    { day: 1, date: '2025-03-01', events: [{ time: '10:00 AM', title: 'Rehearsal', type: 'rehearsals' }] },
    { day: 2, date: '2025-03-02', events: [{ time: '7:00 PM', title: 'Rehearsal', type: 'rehearsals' }] },
    { day: 3, date: '2025-03-03', events: [] },
    { day: 4, date: '2025-03-04', events: [] },
    { day: 5, date: '2025-03-05', events: [] },
    { day: 6, date: '2025-03-06', events: [] },
  ];

  const filterTypes = [
    { id: 'rehearsals', label: 'Rehearsals', color: 'blue' },
    { id: 'performances', label: 'Performances', color: 'green' },
    { id: 'meetings', label: 'Meetings', color: 'orange' }
  ];

  const handlePrevMonth = () => {
    // Logic to go to previous month
    setCurrentMonth('February 2025');
  };

  const handleNextMonth = () => {
    // Logic to go to next month
    setCurrentMonth('April 2025');
  };

  const handleCreateEvent = () => {
    // Logic to open create event form
    console.log('Open create event form');
  };

  return (
    <div className="schedule-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <span className="icon">📅</span>
          <h1>Schedule Dashboard</h1>
        </div>
        <div className="dashboard-actions">
          <button className="new-event-button" onClick={handleCreateEvent}>
            <span className="plus-icon">+</span>
            New Event
          </button>
          <div className="user-profile">
            <img src="https://via.placeholder.com/32" alt="User" className="user-avatar" />
          </div>
        </div>
      </div>

      <div className="view-controls">
        <div className="view-options">
          <button className={viewMode === 'week' ? 'active' : ''} onClick={() => setViewMode('week')}>Week</button>
          <button className={viewMode === 'month' ? 'active' : ''} onClick={() => setViewMode('month')}>Month</button>
          <span className="filter-label">Filter:</span>
          {filterTypes.map(filter => (
            <button 
              key={filter.id}
              className={`filter-button ${filterActive === filter.id ? 'active' : ''} ${filter.id}`}
              onClick={() => setFilterActive(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="export-options">
          <button className="export-button">
            <span className="download-icon">↓</span>
            Download
          </button>
          <button className="print-button">
            <span className="print-icon">🖨️</span>
            Print
          </button>
        </div>
      </div>

      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{currentMonth}</h2>
          <div className="calendar-navigation">
            <button className="nav-button" onClick={handlePrevMonth}>
              <span className="arrow-icon">←</span>
            </button>
            <button className="nav-button" onClick={handleNextMonth}>
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>

        <div className="calendar-grid">
          <div className="weekday-header">
            <div className="weekday">Sun</div>
            <div className="weekday">Mon</div>
            <div className="weekday">Tue</div>
            <div className="weekday">Wed</div>
            <div className="weekday">Thu</div>
            <div className="weekday">Fri</div>
            <div className="weekday">Sat</div>
          </div>
          
          <div className="calendar-days">
            {calendarData.map((dayData, index) => (
              <div 
                key={index} 
                className={`calendar-day ${!dayData.date ? 'prev-month' : ''}`}
              >
                <div className="day-number">{dayData.day}</div>
                <div className="day-events">
                  {dayData.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className={`calendar-event ${event.type}`}
                    >
                      {event.time} - {event.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className={`event-icon ${event.color}`}>
                {event.type === 'rehearsals' && '🎵'}
                {event.type === 'performances' && '🎭'}
                {event.type === 'meetings' && '👥'}
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-time">{event.date}, {event.time}</p>
              </div>
              <button className="event-options">⋮</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDashboard;