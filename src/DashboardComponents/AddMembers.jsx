import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboardStyles/AddMember.css';

const AddMember = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Soprano',
    joinDate: '',
    status: 'Active',
    image: '',
  });

  const [message, setMessage] = useState('');

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!formData.name || !formData.email || !formData.joinDate) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const newMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      joinDate: formData.joinDate,
      status: formData.status,
      image: formData.image || '', 
    };

    setMessage('Member added successfully!');
    setTimeout(() => {
      navigate('/members', { state: { newMember } }); 
    }, 1500);
  };

  return (
    <div className="add-member-page">
      <div className="add-member-header">
        <h1>Add New Member</h1>
      </div>

      <div className="add-member-form-container">
        {message && (
          <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="add-member-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange}>
              <option value="Soprano">Soprano</option>
              <option value="Tenor">Tenor</option>
              <option value="Alto">Alto</option>
              <option value="Bass">Bass</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="joinDate">Join Date *</label>
            <input
              type="date"
              id="joinDate"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL (optional)"
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;