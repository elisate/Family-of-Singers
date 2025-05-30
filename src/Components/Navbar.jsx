import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/mainlogo.png';
import '../Styles/navbar.css';

function Navbar() {
    const location = useLocation();

    const getNavbarClass = () => {
        switch (location.pathname) {
            case '/':
                return 'navbar home-navbar';
            case '/about':
                return 'navbar about-navbar';
            case '/schedule':
                return 'navbar schedule-navbar';
            case '/commissions':
                return 'navbar commissions-navbar';
            default:
                return 'navbar';
        }
    };

    return (
        <nav className={getNavbarClass()}>
          <div className="navbar-container">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/" id="home-link">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <div className="dropdown">
                    <li><Link to="#" className="dropdown-toggle">Events</Link></li>
                    <div className="dropdown-content">
                        <li><Link to="#">Upcoming Events</Link></li>
                        <li><Link to="#">Past Events</Link></li>
                        <li><Link to="#">Special Programs</Link></li>
                    </div>
                </div>
                <li><Link to="/schedule">Our Schedule</Link></li>
                <li><Link to="/commissions">Commissions</Link></li>
                <li><button className="support-btn">Support Us</button></li>
            </ul>
          </div>
        </nav>
    );
}

export default Navbar;
