import React from 'react'
import AdminPage from '../../components/Layouts/AdminPage/AdminPage'
import { Link } from 'react-router-dom';
const AdminLayout = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token && role === 'admin') {
    return (
      <>
        <AdminPage />
      </>
    );
  } else {
    // Redirect to the home page if the conditions are not met
    return (
      <>
      <h1 style={{textAlign:"center"}}>You are not authorized<br/>
      <Link to="/">Go to Home</Link></h1>
      </>
    ) 
  }
}
export default AdminLayout