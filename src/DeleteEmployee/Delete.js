import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import './delete.css'



function Delete(props) {
  const navigate = useNavigate();
  const[id, setId]=useState("");
  const[employees,setEmployees] =useState([]);
 
  const handleDelete = async e => {
    e.preventDefault();
    axios.delete('http://localhost:8080/api/employee/data/' + id ) 
         .then((res) => {
            if (res.status === 200) {
              swal("Employee successfully deleted");
             navigate('/home')
            } else Promise.reject();
          })
          .catch((err) => swal("Something went wrong"));
      };
    
  return (
    <body>
      <div class="topnav">
        <a href="/schedule">Schedule</a>
        <a href="/home">Dashboard</a>
        <a href="/assignment">Assignment</a>
        <a href="/orders">Orders</a>
        <a href="/">Logout</a>
      </div>  
          <h3 className="Auth-form-title">Delete Employee</h3>         
            <input
              type="int"
              name="id-employee"
              className='id-input-for-delete'
              placeholder="Employee id"  onChange={event => setId(event.target.value)}
              value={employees.id}/>                      
      <input className ='btn-delete' type="submit" value='Delete' onClick={handleDelete}/>
      
      </body>
   
  );
  
}

  
export default Delete;