// Overview.jsx
import React from "react";
import "./dashboardStyles/overview.css";

const Overview = () => {
    return (
        <div className="overview">
            <h2>Dashboard</h2>
            <div className="card">
                <h3>Recent Updates</h3>
                <ul>
                    <li>New member added: Sarah Johnson</li>
                    <li>Member John Smith is now a mentor</li>
                    <li>Christmas event scheduled</li>
                </ul>
            </div>
            <div className="card">
                <h3>Member Distribution</h3>
                <p>Sopranos: 40%</p>
                <p>Altos: 30%</p>
                <p>Tenors: 20%</p>
                <p>Basses: 10%</p>
            </div>
        </div>
    );
};

export default Overview;
