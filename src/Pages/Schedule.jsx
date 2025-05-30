import React from 'react';
import '../Styles/schedule.css';
import { FaDrum, FaPeopleGroup} from "react-icons/fa6";
// import familyIcon from '../assets/family-icon.png';
// import technicalIcon from '../assets/technical-icon.png';

const Schedule = () => {
  return (
    <div className="schedule-page">
      {/* Header Section */}
      <div className="schedule-header">
        <div className="schedule-header-overlay">
          <h1>Our Schedule</h1>
          <div className="breadcrumb">
            <span>HOME</span> / <span className="current">OUR SCHEDULE</span>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="schedule-content">
        <div className="section-heading">
          <hr className="title-line" />
          <h2>Our Schedule</h2>
          <hr className="title-line" />
        </div>

        <h3 className="practices-title">Practices</h3>

        <div className="choir-groups">
          <div className='choir fos'>
          <div className="choir-group">
          <FaPeopleGroup className="drum-icon" /></div>
          <div className="group-info">
              <h4>FOS</h4>
              <p>Family of Singers</p> 
          </div>
          </div>
          <div className='choir technical-team'>
          <div className="choir-group">
          <FaDrum className="drum-icon" /></div>
            <div className="group-info">
              <h4>Reduction</h4>
              <p>Technical Team</p>
              </div> 
          </div>
        </div>

        <div className="schedule-grid">
          <div className="schedule-day">
            <div className="day-header">
              <h4>Monday</h4>
              <span className="schedule-time">7:00pm - 9:00pm</span>
            </div>
            <hr className="day-divider" />
            <p className="schedule-location">Brief Description</p>
          </div>

          <div className="schedule-day" id="schedule-link" >
            <div className="day-header">
              <h4>Saturday</h4>
              <span className="schedule-time">3:00pm - 6:00pm</span>
            </div>
            <hr className="day-divider" />
            <p className="schedule-location">Brief Description</p>
          </div>

          <div className="schedule-day">
            <div className="day-header">
              <h4>Wednesday</h4>
              <span className="schedule-time">7:00pm - 9:00pm</span>
            </div>
            <hr className="day-divider" />
            <p className="schedule-location">Brief Description</p>
          </div>

          <div className="schedule-day">
            <div className="day-header">
              <h4>Friday</h4>
              <span className="schedule-time">7:00pm - 9:00pm</span>
            </div>
            <hr className="day-divider" />
            <p className="schedule-location">Brief Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;