import React from 'react'
import './PendingPayments.css'
import { useState, useEffect } from 'react';
const PendingPayments = () => {
    // getUsers    -- show members
  const [users, setUsers] = useState([]);
    const getUsers = async () => {
      const response = await fetch("http://localhost:8080/getMembers", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    };
    useEffect(() => {
      getUsers();
    }, []);

    // Filter Data : 
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() =>{
      const filteredData = users.filter(item => item.FeesBalance>0);
      setFilteredData(filteredData);
    },[users]);
  return (
    <div className='pending-payment-table'>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>PT</th>
                <th>Paid</th>
                <th>Balance</th>
              </tr>
            </thead>
           {users[0] ?(
             filteredData.map((key, index) => (
            <tbody>
              <tr>
              <td>{index + 1}</td>
              <td>{key.Name}</td>
              <td>{key.PT}</td>
              <td>{key.FeesPaid}</td>
              <td>{key.FeesBalance}</td>
              </tr>
            </tbody>
            ))):null}
            </table>
    </div>
    </div>
  )
}

export default PendingPayments