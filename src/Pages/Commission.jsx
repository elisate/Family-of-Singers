import React from "react";
import "../styles/commission.css"; // Import CSS for styling
import { FaDrum } from "react-icons/fa6";; //import drums to be used later
// import Luminosity from '/src/assets/LightHolder.png'
import HolderOfLight from "/src/assets/HolderOfLight.jpg";
//import the united family icon
import Union from "/src/assets/familyUnion.jpg"
//import the bible icon
import { FaBible } from "react-icons/fa";
// Data for commissions (simulating database entries)
const commissionData = [
  {
    id: 1,
    name: "Family Commission",
    description: "Description",
    icon: <img src={Union} className='family-icon' alt="Family Commission" />,
  },
  {
    id: 2,
    name: "Development Commission",
    description: "Description",
    icon: <img src={HolderOfLight} className='light-icon' alt="Development Commission" />, // holder of light icon
  },
  {
    id: 3,
    name: "Concert Commission",
    description: "Description",
    icon: "📜", // List icon
  },
  {
    id: 4,
    name: "Prayer Commission",
    description: "Description",
    icon:  <FaBible className="icon-style" />, // Cross icon
  },
  {
    id: 5,
    name: "Music and Technic Commission",
    description: "Description",
    icon: <FaDrum />, // Drum icon
  },
];

const CommissionGrid = () => {
  return (
    <section className="commission-section">
      <h2 className="commission-title">
        <span>Our commissions</span>
      </h2>
      <div className="commission-grid">
        {commissionData.map((commission) => (
          <div className="commission-card" key={commission.id}>
            <div className="commission-icon">{commission.icon}</div>
            <h3 className="commission-name">{commission.name}</h3>
            <p className="commission-description">{commission.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommissionGrid;
