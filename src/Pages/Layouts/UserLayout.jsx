import React from 'react'
import UserPage from '../../components/Layouts/UserPage/UserPage'
import { Link } from 'react-router-dom';
const UserLayout = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token  && role === 'member') {
    return (
      <>
        <UserPage />
      </>
    );
  } else {
    return (
      <>
      <h1 style={{textAlign:"center"}}>You are not authorized<br/>
      <Link to="/">Go to Home</Link></h1>
      </>
    ) 
  }
}

export default UserLayout
{/* <UserPage/> */}