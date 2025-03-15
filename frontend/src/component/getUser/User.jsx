import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './User.css';
import axios from 'axios';

const User = () => {
const [users ,setUsers]=useState([])

useEffect(()=>{
    const fetchData =async()=>{
          try{
            const res = await axios.get("http://localhost:3000/user/getall" )
            setUsers(res.data)
          }catch(error){
            console.error(error,"error to fetch data")
          }
    }
 fetchData();
},[])


const deleteUser = async(id)=>{
  try{
      await axios.delete(`http://localhost:3000/user/delete/${id}`)

     setUsers(users.filter(user=>user._id !==id))
  }catch(error){
    console.error("Error deleting user:", error);
  }

}

  return (
    <div className='user-table'>
      <Link to={'/add'}>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr >
            <th>S.no</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {users && users.length > 0 ? (
    users.map((user, index) => (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>{user.fname} {user.lname}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={()=>deleteUser(user._id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <Link to={`/edit/`+ user._id}>
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No user found</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default User;
