// Dashboard.jsx
import React from "react";
import "./dashboardStyles/dashboard.css";
import Sidebar from './Sidebar';
import Overview from "./Overview";
import Members from "./Members";
import Media from "./Media";
import ScheduleDashboard from "./schedule";
import { useState } from "react";

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("overview");

    return (
        <div className="dashboard-container">
            <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
            <div className="dash-content">
                {activeSection === "overview" && <Overview />}
                {activeSection === "members" && <Members />}
                {activeSection === "media" && <Media />}
                {activeSection === "schedule" && <ScheduleDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;
