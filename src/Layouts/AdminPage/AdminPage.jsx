import React from 'react'
import './AdminPage.css'
import Sidebar from "../Admin/Sidebar/Sidebar";
import Topbar from '../Admin/TopBar/Topbar';
import PageContent from '../Admin/PageContent/PageContent';
const AdminPage = () => {
  return (
    <div className="admin-page">
        <div className="left-side">
            <Sidebar/>
        </div>
        <div className="right-side">
          <div className="top-bar">
              <Topbar />
          </div>
          <div className="main-body">
            <PageContent/>
          </div>
        </div>
    </div>
  )
}

export default AdminPage