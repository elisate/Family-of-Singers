import React, { useState } from 'react';
import '../DashboardComponents/dashboardStyles/event.css';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    description: '',
    repertoire: '',
    dress: 'formal',
    callTime: '',
    duration: '',
    requiredMembers: [],
  });

  const choirSections = [
    'Soprano', 'Alto', 'Tenor', 'Bass', 'Conductor', 'Accompanist'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        requiredMembers: [...formData.requiredMembers, value],
      });
    } else {
      setFormData({
        ...formData,
        requiredMembers: formData.requiredMembers.filter(item => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Event data submitted:', formData);
    alert('Event created successfully!');
  };

  return (
    <div className="create-event-container">
      <div className="create-event-header">
        <h1>Create New Choir Event</h1>
        <p>Please fill in the details for the new choir event</p>
      </div>

      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            placeholder="e.g. Spring Concert"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="eventDate">Date</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventTime">Start Time</label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (hours)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              min="0.5"
              step="0.5"
              value={formData.duration}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g. St. Mary's Church"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Provide details about the event..."
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="repertoire">Repertoire</label>
          <textarea
            id="repertoire"
            name="repertoire"
            value={formData.repertoire}
            onChange={handleInputChange}
            placeholder="List the pieces to be performed..."
            rows="3"
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dress">Dress Code</label>
            <select
              id="dress"
              name="dress"
              value={formData.dress}
              onChange={handleInputChange}
            >
              <option value="formal">Formal (All Black)</option>
              <option value="semi-formal">Semi-Formal</option>
              <option value="casual">Casual</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="callTime">Call Time</label>
            <input
              type="time"
              id="callTime"
              name="callTime"
              value={formData.callTime}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Required Sections</label>
          <div className="checkbox-group">
            {choirSections.map(section => (
              <div key={section} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`section-${section}`}
                  name="requiredMembers"
                  value={section}
                  checked={formData.requiredMembers.includes(section)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`section-${section}`}>{section}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="submit-button">Create Event</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;