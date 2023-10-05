import React from 'react';
import Topbar from '../../User/Topbar/Topbar';
import './UserPage.css';
import UserBody from '../../User/UserBody/UserBody';
const UserPage = () => {
  return (
    <div className="user-home">
      <div className="user-topbar">
        <Topbar/>
      </div>
      <div className="user-content">
        <UserBody/>
      </div>
    </div>
  )
}

export default UserPage