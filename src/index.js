import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route,
} from "react-router-dom";
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import AddEmployee from './AddEmployee/AddEmployee';
import Delete from './DeleteEmployee/Delete';
import UpdateEmployee from './EditEmployee/UpdateEmployee';
import Updateschedule from './Updateschedule/Updateschedule';
import Schedule from './Schedule/Schedule';
import Assignment from './Assignment/Assignment';
import UpdateAssignment from './UpdateAssignment/UpdateAssignment';
import Orders from './Order/Orders';
import UpdateOrder from './UpdateOrder/UpdateOrders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },{
    path: "/home",
    element: <Dashboard/>,
  },
  {
    path: "/addemployee",
    element: <AddEmployee/>,
  },
  {
    path: "/deleteEmployee",
    element: <Delete/>,
  },
  {
    path: "/updateEmployee",
    element: <UpdateEmployee/>,
  },
  {
    path: "/updateSchedule",
    element: <Updateschedule/>,
  },
  {
    path: "/schedule",
    element: <Schedule/>,
  },
  {
    path: "/assignment",
    element: <Assignment/>,
  },

  {
    path: "/updateAssignment",
    element: <UpdateAssignment/>,
  },
  {
    path: "/orders",
    element: <Orders/>,
  },
  {
    path: "/updateOrders",
    element: <UpdateOrder/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
