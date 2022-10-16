import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './assignment.css'



function Assignment(props) {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState([])


  const fetchEmployeeList = async () => {
    const response = await axios
      .get('http://localhost:8080/api/employee/data/all')
      .catch((err) => console.log(err))
    if (response) {
      const employees = response.data

      console.log('Employees: ', employees)
      setEmployees(employees)
    }
  }
  useEffect(() => {
    fetchEmployeeList()
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()

    navigate('/updateAssignment')
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
      <table className="table">
        <caption>Assignments</caption>
        <tr className="table-title">
          <th>Task Id</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Status</th>
          <th>Task</th>

        </tr>
        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.assignment.id}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.assignment.status}</td>
              <td>{employee.assignment.task}</td>

            </tr>
          )
        })}
        <button className="pure-button1" onClick={handleUpdate}>Update Assignment</button>
      </table>

    </body>
  )
}
export default Assignment;