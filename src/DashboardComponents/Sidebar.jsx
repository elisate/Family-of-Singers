import React from "react";
import { HiHome, HiUsers, HiPhotograph, HiCalendar } from "react-icons/hi"; // Heroicons from react-icons
import "./dashboardStyles/sidebar.css";

const Sidebar = ({ setActiveSection, activeSection }) => {
    return (
        <div className="sidebar">
            <a onClick={() => setActiveSection("overview")} className={activeSection === "overview" ? "active" : ""}>
                <HiHome className="icon" />
                Dashboard
            </a>
            <a onClick={() => setActiveSection("members")} className={activeSection === "members" ? "active" : ""}>
                <HiUsers className="icon" />
                Members
            </a>
            <a onClick={() => setActiveSection("media")} className={activeSection === "media" ? "active" : ""}>
                <HiPhotograph className="icon" />
                Media
            </a>
            <a onClick={() => setActiveSection("schedule")} className={activeSection === "schedule" ? "active" : ""}>
                <HiCalendar className="icon" />
                Schedule
            </a>
        </div>
    );
};

export default Sidebar;
