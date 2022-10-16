import axios from 'axios'
import React, { useEffect, useMemo, useState, Component } from 'react'
import { useTable, table } from 'react-table'
import { useNavigate } from 'react-router-dom'
import './dashboard.css';


export function Dashboard(props) {
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

  const handle = async (e) => {
    e.preventDefault()

    navigate('/addemployee')
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    navigate('/deleteEmployee')
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    navigate('/updateEmployee')
  }

  return (
    <body>
      <div class="topnav">
        <a href="/schedule">Schedule</a>
        <a href="/assignment">Assignment</a>
        <a href="/orders">Orders</a>
        <a href="/">Logout</a>
      </div>

      <table className="table">
        <caption>Employees data for October</caption>
        <tr className="table-title">
          <th>Id</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Experience</th>
          <th>Start day</th>
          <th>Salary</th>
        </tr>
        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.email}</td>
              <td>{employee.experience}</td>
              <td>{employee.startWorkDay}</td>
              <td>{employee.salary}</td>
            </tr>
          )
        })}
        <button className="pure-button-add-employee" onClick={handle}>Add Employee</button>&nbsp;
        <button className="pure-button-edit-employee" onClick={handleUpdate}>Update Employee</button>
        <button className="pure-button-delete-employee" onClick={handleDelete}> Delete Employee </button>
      </table>

    </body>
  )
}
export default Dashboard
