import React from 'react';
import './Sidebar.css'
import SidebarData from './SidebarData';
const Sidebar = ({children}) => {

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-content">
          <ul>
            {SidebarData.map((val, key) => {
              return (
                <li
                  className="row"
                  id={window.location.pathname == val.link ? "active" : ""}
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                  >
                 <div id="icon">{val.icon}</div>{" "}
                  <div id="title">{val.title}</div>
           </li>
              );
            })}
          </ul>
      </div>
    </div>
    <main>{children}</main>
    </>
  );
}

export default Sidebar
