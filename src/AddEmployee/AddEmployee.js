import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './addemployee.css'


function AddEmployee(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const[name, setName]=useState("");
  const[surname, setSurname]=useState("");
  const[startWorkDay, setStartWorkDay]=useState("");
  const[experience, setExperience]=useState("");
  const[salary, setSalary]=useState("");
  const[email, setEmail]=useState("");
  const[assignment, setAssignment]=useState({});
  const[schedule, setSchedule]=useState({});
  const [post, setPost] = React.useState(null);

  
  async function addEmployee(credentials) {
    return fetch('http://localhost:8080/api/employee/data/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
      
    })
      .then(data => data.json())
      
   }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await addEmployee({
      name,
      surname,
      startWorkDay,
      experience,
      salary,
      email,
      schedule:{},
      assignment:{},
      order:{}
    });
    
    if ("Success", response.status === 200, "Success") {    
      swal("Employee is created!");
        navigate ('/home')
      }
    else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <body>
   <div class="topnav">
        <a href="/schedule">Schedule</a>
        <a href="/home">Dashboard</a>
        <a href="/assignment">Assignment</a>
        <a href="/orders">Orders</a>
        <a href="/">Logout</a>
      </div>     
          <h3 className="Auth-form-title">Add Employee</h3>

            <input
              type="text"
              name="name"
              className="employee-add"
              placeholder="First Name" onChange={event => setName(event.target.value)}
              value={name}/>
                  
            <input
              type="text"
              name="surname"
              className="employee-add"
              placeholder="Surname" value={surname}
              onChange={event => setSurname(event.target.value)}/>
          
            <input
              type="text"
              name="startDay"
              className="employee-add"
              placeholder="Sart Day" value={startWorkDay}
              onChange={event => setStartWorkDay(event.target.value)}/>
          
            <input
              type="text"
              name="experience"
              className="employee-add"
              placeholder="Experience" value={experience}
              onChange={event => setExperience(event.target.value)}/>
          
            <input
              type="text"
              name="salary"
              className="employee-add"
              placeholder="Salary" value={salary}
              onChange={event => setSalary(event.target.value)}/>
          
            <input
              type="text"
              name="email"
              className="employee-add"
              placeholder="Email" value={email}
              onChange={event => setEmail(event.target.value)}/>
          
         <input type="button" className='btn-add-employee'value={loading ? 'Loading...' : 'Add New Employee'} onClick={handleSubmit} disabled={loading} /><br />
     </body>
  );
  
}

export default AddEmployee;