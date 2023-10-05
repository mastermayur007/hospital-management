import React from 'react'
import './Topbar.css'
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const navigate = useNavigate();
  const navigateToAddCustomer = () =>{
    navigate('/app/addcustomer')
  }
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate('/');
  };
  return (
    <div className="admin-topbar">
      <button onClick={navigateToAddCustomer}>Add Customer</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Topbar