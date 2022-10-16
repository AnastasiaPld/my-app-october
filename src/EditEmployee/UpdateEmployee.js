import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './updateEmployee.css'


function UpdateEmployee(props) {
    
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const[name, setName]=useState("");
  const[id, setId]=useState("");
  const[surname, setSurname]=useState("");
  const[startWorkDay, setStartWorkDay]=useState("");
  const[experience, setExperience]=useState("");
  const[salary, setSalary]=useState("");
  const[email, setEmail]=useState("");
  const [post, setPost] = React.useState(null);
  const[schedule, setSchedule]=useState({});
  const[employees,setEmployees] =useState([]);

   async function updateUser(credentials) {
   
    console.log(  
      credentials
   )
   
    return fetch ('http://localhost:8080/api/employee/data/employees/' + id, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(
        credentials)
    
    })
      .then(data => data.json())
     
   }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await updateUser({
      name:name&&name!==''? name:null,
      surname:surname&&surname!==''?surname:null, startWorkDay:startWorkDay&&startWorkDay!==''?startWorkDay:null,experience:experience&&experience!==''?experience:null,
      salary:salary&&salary!==''?salary:null,email:email&&email!==''?email:null,schedule:{}
    
    });
    if ("Success", response.status === 200, "Success") {
        swal("Employee data is updated!")
        navigate ('/home')
      }
    else {
      swal("Failed", response.message, "error");
    }
    
  }

  return (
   <body className='bodyContainer'>
    <div className="inner-container">
    <div class="topnav">
        <a href="/schedule">Schedule</a>
        <a href="/home">Dashboard</a>
        <a href="/assignment">Assignment</a>
        <a href="/orders">Orders</a>
        <a href="/">Logout</a>
      </div>
          <h3 className="Auth-form-title">Update Employee</h3>        
            <input
              type="number"
              name="id"
              className="input-update-page"
              placeholder="Id" onChange={event => setId(event.target.value)}
              value={id}/>      
            <input
              type="text"
              name="name"
              className="input-update-page"
              placeholder="Name" onChange={event => setName(event.target.value)}         
            value={employees.setName}
             />        
            <label htmlFor="password"></label>
            <input
              type="text"
              name="surname"
              className="input-update-page"
              placeholder="surname" 
              onChange={event => setSurname(event.target.value)}
              value={employees.surname}/>
                  
           
            <input
              type="int"
              name="start-day"
              className="input-update-page"
              placeholder="Start Day"
              onChange={event => setStartWorkDay(event.target.value)}
              value={employees.startWorkDay}/>
          
            
            <input
              type="int"
              name="experience"
              className="input-update-page"
              placeholder="Experience" 
              onChange={event => setExperience(event.target.value)}
              value={experience}/>
         
        
            <label htmlFor="salary"></label>
            <input
              type="int"
              name="salary"
              className="input-update-page"
              placeholder="Salary" 
              onChange={event => setSalary(event.target.value)}
              value={employees.salary}/>
         
            <label htmlFor="email"></label>
            <input
              type="text"
              name="email"
              className="input-update-page"
              placeholder="Email" value={email}
              onChange={event => setEmail(event.target.value)}
              />
         
      <input type="button" className='button-update-employee-page' value={loading ? 'Loading...' : 'Update'} onClick={handleSubmit} disabled={loading} /><br />
        </div>
    
        </body>
  );
  
}

  
export default UpdateEmployee;