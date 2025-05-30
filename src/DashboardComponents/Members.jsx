import React, { useState } from 'react';
import './dashboardStyles/members.css'; 
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import C1 from '../assets/C1.jpg'
import C2 from '../assets/C2.jpg'
import C3 from '../assets/C3.jpg'
import C4 from '../assets/C4.jpg'

const Members = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'Sarah Kamali', email: 'sarah.w@email.com', role: 'Soprano', joinDate: 'Jan 15, 2025', status: 'Active', image:C1 },
    { id: 2, name: 'John Petero', email: 'john.d@email.com', role: 'Bass', joinDate: 'Mar 3, 2025', status: 'Active', image: C2 },
    { id: 3, name: 'Emma Gakumba', email: 'emma.t@email.com', role: 'Alto', joinDate: 'Feb 20, 2025', status: 'On Leave', image: C3 },
    { id: 4, name: 'Michael Habineza', email: 'michael.c@email.com', role: 'Tenor', joinDate: 'Apr 10, 2025', status: 'Active', image:C4 },
  ]);

  
  const handleDelete = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };


  const handleEdit = (id) => {
    alert(`Edit member with ID: ${id}`);
  };

 
  const handleAddMember = () => {
    alert('Add new member functionality to be implemented');
  };

  return (
    <div className="members-page">
      <div className="members-header">
        <h1>Choir Members</h1>
        <Link to="/Addmembers">
          <button className="add-member-btn" onClick={handleAddMember}>
            + New Member
          </button>
        </Link>
      </div>

      <div className="members-table">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map(member => (
                <tr key={member.id}>
                  <td>
                    <div className="member-info">
                      <img src={member.image} alt={member.name} className="member-image" />
                      <div>
                        <div className="member-name">{member.name}</div>
                        <div className="member-email">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`role-badge role-${member.role.toLowerCase()}`}>
                      {member.role}
                    </span>
                  </td>
                  <td>{member.joinDate}</td>
                  <td>
                    <span className={`status-badge status-${member.status.toLowerCase().replace(' ', '-')}`}>
                      {member.status}
                    </span>
                  </td>
                  <td>
                    <div className="member-actions">
                      <button onClick={() => handleEdit(member.id)} className="action-btn">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(member.id)} className="action-btn">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;