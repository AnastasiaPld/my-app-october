
import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Login/>,
  <Dashboard/>
   
  );
}

export default App;
