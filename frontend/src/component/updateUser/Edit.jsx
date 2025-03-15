import React, { useState,useEffect  } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../addUser/Add.css'
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    // Initialize state with empty values
    const [user, setUser] = useState({
      fname: '',
      lname: '',
      email: '',
      password: '',
    });
  
    // Fetch the existing user data when component mounts
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/user/${id}`);
          // Assuming the API returns an object with keys: fname, lname, email, password
          setUser(res.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUser();
    }, [id]);
  
    // Handle input changes
    const inputChangeHandler = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };
  
    // Handle form submission for updating user data
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.put(`http://localhost:3000/user/update/${id}`, user);
        console.log("User updated successfully:", res.data);
        // Optionally navigate back to the user list or another page
        navigate("/");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
  

  
  return (
    <div className="add-user">
      <Link to="/">Back</Link>
      <h1>Update User</h1>
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First Name:</label>
          <input 
           onChange={inputChangeHandler}
            type="text" 
            id="fname" 
            name="fname"  // Updated name attribute
            value={user.fname} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input 
            onChange={inputChangeHandler}
            type="text" 
            id="lname" 
            name="lname"  // Updated name attribute
            value={user.lname} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
           onChange={inputChangeHandler}
            type="email" 
            id="email" 
            name="email" 
            value={user.email} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
           onChange={inputChangeHandler}
            type="password" 
            id="password" 
            name="password" 
            value={user.password} 
            required 
          />
        </div>

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Edit;
