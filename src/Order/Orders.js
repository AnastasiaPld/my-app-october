import React, { useState,useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './order.css'



function Orders(props) {
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

    navigate('/updateOrders')
  }

  return (
    
    <body>
    <div class="topnav">
        <a href="/schedule">Schedule</a>
        <a href="/assignment">Assignment</a>
        <a href="/home">Dashboard</a>
        <a href="/">Logout</a>
      </div>
      <table className="table">
        <caption>Orders</caption>
        <tr className="table-title">
          <th>Order Id</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Order name</th>
          <th>Order Date</th>
          <th>Order Status</th>
          <th>Order Quantity</th>         
        </tr>
        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.order.id}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.order.name}</td>
              <td>{employee.order.date}</td>
              <td>{employee.order.orderStatus}</td>
              <td>{employee.order.quantity}</td>            
            </tr>
          )
        })}
        <button className="update-order-btn" onClick={handleUpdate}>Update Order</button>
      </table>
     
    </body>
  )
}
export default Orders;