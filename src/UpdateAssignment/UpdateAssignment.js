import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './updateTask.css'


function UpdateAssignment(props) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [task, setTask] = useState("");


  async function updateTask(credentials) {

    return fetch('http://localhost:8080/api/employee/data/assignment/' + id, {
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

    const response = await updateTask({
      task: task && task !== '' ? task : null,
      status: status && status !== '' ? status : null, id: id && id !== '' ? id : null,

    });
    if ("Success", response.status === 200, "Success") {
      swal("Assignment was updated!")
      navigate('/assignment')
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
      <h3 className="Auth-form-title">Update Assignment</h3>
      <input
        type="number"
        name="id"
        className="input-task-update"
        placeholder="Id" onChange={event => setId(event.target.value)}
        value={id} />
     <input
        type="text"
        name="task"
        className="input-task-update"
        placeholder="Task" onChange={event => setTask(event.target.value)}
        value={task}
      />
      <input
        type="text"
        name="status"
        className="input-task-update"
        placeholder="Status"
        onChange={event => setStatus(event.target.value)}
        value={status} />

      <input type="button" className='button-update-task' value={'Update'} onClick={handleSubmit} /><br />

    </body>
  );

}

export default UpdateAssignment;