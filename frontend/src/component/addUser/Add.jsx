import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Add.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Add = () => {
  const [formData, setFormData] = useState({
    fname: '',   
    lname: '',   
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/user/create", formData);
      console.log("Form submitted:", res.data);
       toast.success(res.data.msg)
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="add-user">
      <Link to="/">Back</Link>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First Name:</label>
          <input 
            type="text" 
            id="fname" 
            name="fname"  // Updated name attribute
            value={formData.fname} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input 
            type="text" 
            id="lname" 
            name="lname"  // Updated name attribute
            value={formData.lname} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
