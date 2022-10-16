import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './updateOrder.css'


function UpdateOrder(props) {
    
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const[name, setName]=useState("");
  const[id, setId]=useState("");
  const[date, setDate]=useState("");
  const[orderStatus, setOrderStatus]=useState("");
  const[quantity, setQuantity]=useState("");
  const[now, setNow]=useState("");
  const [post, setPost] = React.useState(null);
  const[employees,setEmployees] =useState([]);

   async function updateOrder(data) {
   
    console.log(  
      data
   )
   
    return fetch ('http://localhost:8080/api/employee/data/order/' + id, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(
        data)
    
    })
      .then(data => data.json())
     
   }

  const handleUpdate = async e => {
    e.preventDefault();
    const response = await updateOrder({
        id,
      name:name&&name!==''? name:null,
      date:date&&date!==''?date:null, orderStatus:orderStatus&&orderStatus!==''?orderStatus:null,quantity:quantity&&quantity!==''?quantity:null,
      now:now&&now!==''?now:null
    
    });
    if ("Success", response.status === 200, "Success") {
        swal("Order is updated!")
        navigate ('/orders')
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
          <h3 className="Auth-form-title">Update Order</h3>        
            <input
              type="number"
              name="id"
              className="input-order-page"
              placeholder="Id" onChange={event => setId(event.target.value)}
              value={id}/>      
            <input
              type="text"
              name="name"
              className="input-order-page"
              placeholder="Order Name" onChange={event => setName(event.target.value)}         
            value={name}
             />        
            
            <input
              type="text"
              name="surname"
              className="input-order-page"
              placeholder="Order Date" 
              onChange={event => setDate(event.target.value)}
              value={date}/>
                  
           
            <input
              type="int"
              name="start-day"
              className="input-order-page"
              placeholder="Order Status"
              onChange={event => setOrderStatus(event.target.value)}
              value={orderStatus}/>
          
            
            <input
              type="int"
              name="experience"
              className="input-order-page"
              placeholder="Quantity" 
              onChange={event => setQuantity(event.target.value)}
              value={quantity}/>
         
        
            <input
              type="int"
              name="salary"
              className="input-order-page"
              placeholder="Date" 
              onChange={event => setNow(event.target.value)}
              value={now}/>
         
      <input type="button" className='button1-update' value={loading ? 'Loading...' : 'Update'} onClick={handleUpdate} disabled={loading} /><br />
        </div>
    
        </body>
  );
  
}

  
export default UpdateOrder;