import './Dashboard.css'
import { React, useState, useEffect } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Dashboard = () => {
  //Total Members
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8080/getMembers", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    };
    getUsers(); 
  }, []);


// New Joined :

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // Calculate the current date and seven days ago
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    // Filter the data to include objects with join dates in the specified range
    const filtered = users.filter(item => {
      const joinDate = new Date(item.JoinDate);
      return joinDate >= sevenDaysAgo && joinDate <= currentDate;
    });

    setFilteredData(filtered);
  }, [users]);

  // Pending Payments :
  const [countPP, setCountPP] = useState([]);
  useEffect(() =>{
    const countPP = users.filter(item => item.FeesBalance>0);
    setCountPP(countPP);
  },[users]);
  
  const dashBoxes = [
    {
      title: "Total Patients",
      value: users.length, // Set the value dynamically based on users.length
      icon: <DashboardIcon style={{ fontSize: 40 }} />,
    },
    {
      title: "New patient register This week",
      value: filteredData.length,
      icon: <PersonAddIcon style={{ fontSize: 40 }} />,
    },
    {
      title: "Pending Payment",
      value: countPP.length,
      icon: <PaymentIcon style={{ fontSize: 40 }} />,
    },
    {
      title: "Notifications",
      value: 63,
      icon: <NotificationsIcon style={{ fontSize: 40 }} />,
    },
    {
      title: "Reviews",
      value: 36,
      icon: <ReviewsIcon style={{ fontSize: 40 }} />,
    },
    {
      title: "Suggestions",
      value: 45,
      icon: <TipsAndUpdatesIcon style={{ fontSize: 40 }} />,
    },
  ];

  return (
    <div className='dash'>
      {dashBoxes.map((key, index) => (
        <div className="dashboard-content" key={index}>
          <div className="outer-box">
            <div className="left-side-box">
              <div>{key.title}</div>
              <div>{key.value}</div>
            </div>
            <div className="right-side-box">{key.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
