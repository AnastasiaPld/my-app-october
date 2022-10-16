import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './updateschedule.css'


function Updateschedule(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const[id, setId]=useState("");
  const[vacationLeft, setVacationLeft]=useState("");
  const[workDays, setWorkdays]=useState("");
  const[dayOff, setDayOff]=useState("");
  const[sickLeave, setSickLeave]=useState("");
  const[vacationTaken, setVacationTaken]=useState("");
  const[vacationForTheYear, setVacationForTheYear]=useState("");
  const[motherhood, setMotherhood]=useState("");
  const[employees,setEmployees] =useState([]);

   async function loginUser(data) {
    console.log(  
      data
   )
    return fetch ('http://localhost:8080/api/employee/schedule/edit/' + id, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(
        data)
    
    })
      .then(data => data.json())
      
   }
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
        workDays:workDays&&workDays!==''?workDays:null,
        dayOff:dayOff&&dayOff!==''?dayOff:null,
        sickLeave:sickLeave&&sickLeave!==''?sickLeave:null,
        vacationTaken:vacationTaken&&vacationTaken!==''?vacationTaken:null,
        vacationForTheYear:vacationForTheYear&&vacationForTheYear!==''?vacationForTheYear:null,
        vacationLeft:vacationLeft&&vacationLeft!==''?vacationLeft:null,
        motherhood:motherhood&&motherhood!==''?motherhood:null   
    });
    if ("Success",response.status===200, "error") {
        localStorage.setItem('employee', JSON.stringify(response['employee']));
        navigate ('/schedule')
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
  
          <h3 className="Auth-form-title">Update Employee Schedule</h3>
              <input
              type="number"
              name="id"
              className="input-schedule"
              placeholder="Id" onChange={event => setId(event.target.value)}
              value={id}/>
            
          <label htmlFor="name"></label>
            <input
              type="text"
              name="work-days"
              className="input-schedule"
              placeholder="Work days" onChange={event => setWorkdays(event.target.value)}         
            value={employees.workDays}
             />
          
            <label htmlFor="day-off"></label>
            <input
              type="text"
              name="day-off"
              className="input-schedule"
              placeholder="Day off" 
              onChange={event => setDayOff(event.target.value)}
              value={employees.dayOff}/>
         
            <label htmlFor="sickLeave"> </label>
            <input
              type="int"
              name="sickLeave"
              className="input-schedule"
              placeholder="Sick leave"
              onChange={event => setSickLeave(event.target.value)}
              value={employees.sickLeave}/>
          
                  <input
              type="int"
              name="vacation-taken"
              className="input-schedule"
              placeholder="Vacation Taken" 
              onChange={event => setVacationTaken(event.target.value)}
              value={vacationTaken}/>
               
            <input
              type="int"
              name="vacation-for-the-year"
              className="input-schedule"
              placeholder="Vacation for the year" 
              onChange={event => setVacationForTheYear(event.target.value)}
              value={setVacationForTheYear}/>
          
          
            <input
              type="text"
              name="vacation-left"
              className="input-schedule"
              placeholder="Vacation left" value={vacationLeft}
              onChange={event => setVacationLeft(event.target.value)}
              />
         
        
        
            <input
              type="text"
              name="motherhood/fatherhood"
              className="input-schedule"
              placeholder="Motherhood/Fatherhood" value={motherhood}
              onChange={event => setMotherhood(event.target.value)}
              />
         
          
      <input type="button" className='button-schedule-update' value={loading ? 'Loading...' : 'Update'} onClick={handleSubmit} disabled={loading} /><br />
       
      
     
      </body>
  );
  
}

  
export default Updateschedule;