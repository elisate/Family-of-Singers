// src/pages/Events.jsx
import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import "../DashboardComponents/dashboardStyles/media.css"
import { useNavigate } from 'react-router-dom';
import CreateEvent from '../DashboardComponents/Event.jsx'
function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const eventCategories = [
    { name: 'Concerts', count: 15, color: 'bg-purple-100', textColor: 'text-purple-600' },
    { name: 'Fundraisers', count: 8, color: 'bg-blue-100', textColor: 'text-blue-600' },
    { name: 'Community', count: 22, color: 'bg-green-100', textColor: 'text-green-600' },
    { name: 'Education', count: 12, color: 'bg-orange-100', textColor: 'text-orange-600' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: 'Spring Music Festival 2025',
      date: { month: 'MAR', day: 15 },
      location: 'Central Park, New York',
      description: 'Annual music festival featuring local and international artists...',
    },
    {
      id: 2,
      name: 'Tech Conference 2025',
      date: { month: 'MAR', day: 20 },
      location: 'Convention Center, San Francisco',
      description: 'Join industry leaders for a day of innovation and networking...',
    },
    {
      id: 3,
      name: 'Community Clean-up Day',
      date: { month: 'MAR', day: 25 },
      location: 'Riverside Park, Chicago',
      description: 'Join us for our monthly community clean-up initiative...',
    }
  ];

  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate('/create-event');  // This will navigate to the CreateEvent route
  };

  return (
    <div className="main-content">
      <div className="events-header">
        <div>
          <h1 className="events-title">Events Dashboard</h1>
          <p className="events-subtitle">Manage and track all your events in one place</p>
        </div>
        <button className="create-event-btn" onClick={handleCreateEvent}>+ Create Event</button>
      </div>
      
      <div className="categories-grid">
        {eventCategories.map((category, index) => (
          <div key={index} className={`category-card ${category.color}`}>
            <div className={`category-name ${category.textColor}`}>{category.name}</div>
            <div className={`category-count ${category.textColor}`}>{category.count} Events</div>
          </div>
        ))}
      </div>
      
      <div className="events-tabs-container">
        <div className="events-tabs">
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={`tab-btn ${activeTab === 'past' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>
        
        <div className="events-filters">
          <div className="search-events">
            <Search size={16} />
            <input type="text" placeholder="Search events..." />
          </div>
          
          <div className="category-filter">
            <select defaultValue="all">
              <option value="all">All Categories</option>
              {eventCategories.map((category, index) => (
                <option key={index} value={category.name.toLowerCase()}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="events-list">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-date">
              <div className="event-month">{event.date.month}</div>
              <div className="event-day">{event.date.day}</div>
            </div>
            
            <div className="event-details">
              <h3 className="event-name">{event.name}</h3>
              <div className="event-location">
                <MapPin size={14} />
                <span>{event.location}</span>
              </div>
              <p className="event-description">{event.description}</p>
            </div>
            
            <div className="event-actions">
              <button className="details-btn">Details</button>
              <button className="rsvp-now-btn">RSVP Now</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        <button className="pagination-arrow">&lt;</button>
        <button className="pagination-number active">1</button>
        <button className="pagination-number">2</button>
        <button className="pagination-number">3</button>
        <button className="pagination-arrow">&gt;</button>
      </div>
    </div>
  );
}

export default Events;