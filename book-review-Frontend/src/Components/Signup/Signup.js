import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup/signup', formData);
      console.log('Signup successful:', response.data);
      navigate('/login')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-content">
        <div className="signup-text">
          <h2>About Us</h2>
          <h3>At BookReviewHub, we believe that every book has
             a story worth sharing. Our platform is dedicated to
              helping readers discover new books through honest reviews, 
              ratings, and recommendations. Whether you're looking for your 
              next read or want to share your thoughts on a book, we provide a 
              space for all book lovers to connect and engage. Join us in exploring the world of literature,
               one review at a time!</h3>
          
        </div>
        <div className="signup-form-container">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;