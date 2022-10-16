import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './schedule.css'

export function Schedule(props) {
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

  const handleUpdateSchedule = async (e) => {
    e.preventDefault()

    navigate('/updateSchedule')
  }
  return (

    <body>

      <div class="topnav">
      <div class="topnav">
        <a href="/schedule">Schedule</a>
        <a href="/home">Dashboard</a>
        <a href="/assignment">Assignment</a>
        <a href="/orders">Orders</a>
        <a href="/">Logout</a>
      </div>
      </div>
      <table className="table">
        <caption className='header'>Schedule for Employees</caption>
        <tr className="table-title">
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Work Days</th>
          <th>Day off</th>
          <th>Motherhood</th>
          <th>Sick Leave</th>
          <th>Vacancy for the Year</th>
          <th>Vacancy taken</th>
          <th>Left vacancy</th>
        </tr>
        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.schedule.id}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.schedule.workDays}</td>
              <td>{employee.schedule.dayOff}</td>
              <td>{employee.schedule.motherhood}</td>
              <td>{employee.schedule.sickLeave}</td>
              <td>{employee.schedule.vacationForTheYear}</td>
              <td>{employee.schedule.vacationTaken}</td>
              <td>{employee.schedule.vacationLeft}</td>

            </tr>
          )
        })}
        <button className="pure-button5" href="#" onClick={handleUpdateSchedule}> Update Schedule</button>
      </table>

    </body>
  )
}
export default Schedule
