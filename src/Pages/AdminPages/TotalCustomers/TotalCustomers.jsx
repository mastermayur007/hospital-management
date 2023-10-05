import { React, useState, useEffect } from "react";
import "./TotalCustomers.css";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateForm from "../UpdateForm/UpdateForm";
import VisibilityIcon from '@mui/icons-material/Visibility';

const TotalCustomers = () => {
  const [editSection, setEditSection] = useState(false);

  // Confirm-Delete
  const [seen, setSeen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

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

  // Delete Entry
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/deleteMember/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      setDeleteItemId(null)
      getUsers();
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/updateMember/${formData._id}`,
        {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Data Updated");
        setEditSection(false);
        getUsers();
        console.log(formData)
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  // HandleEditForm
  const [formData, setFormData] = useState({});
  const handleEditForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (users) => {
    setEditSection(true);
    setFormData(users);
  };
  
  // handle delete pop
  function handleDeletePop(){
    handleDelete(deleteItemId)
    setSeen(false);
  }

// Search box

  return (
    <>
    {/* Edit Section */}
      {editSection && (
        <UpdateForm
          handleSubmit={handleUpdate}
          handleForm={handleEditForm}
          handleClose={() => setEditSection(false)}
          rest={formData}
        />
      )}      
      {/* Confirm Delete */}
      {
        seen ? (
        <div className="confirm-delete">
          <h1>Are you sure?</h1><br/><br />
          <button onClick={handleDeletePop}>Yes</button>
          <button onClick={()=>setSeen(false)}>No</button>
        </div>
        ) : null}
      <div className="total-customer-table">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>PT</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Paid</th>
                <th>Balance</th>
                <th style={{width:"8rem"}}>Action</th>
              </tr>
            </thead>
            {users[0] ? (
              users.map((key, index) => (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{key.Name}</td>
                    <td>{key.Mobile}</td>
                    <td>{key.PT}</td>
                    <td>{new Date(key.JoinDate).toLocaleDateString()}</td>
                    <td>{new Date(key.EndDate).toLocaleDateString()}</td>
                    <td>{key.FeesPaid}</td>
                    <td>{key.FeesBalance}</td>
                    <td>
                      <div className="icon-holder">
                        {/* <UploadIcon /> */}
                        <VisibilityIcon
                          onClick={() => {
                            handleEdit(key);
                          }}
                        />
                        <DeleteIcon onClick={()=>{
                          setSeen(true)
                          setDeleteItemId(key._id)}
                          }/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <td colSpan="7">
                <p style={{ margin: "2rem", padding: "1rem" }}>
                  No Data available please add Members Data from Add Customers
                  Button above
                </p>
              </td>
            )}
          </table>
        </div>
      </div>
    </>
  );
};


export default TotalCustomers;
