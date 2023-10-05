import React from 'react'
import './UpdateForm.css'
import { useState,useEffect } from 'react'
import EditIcon from "@mui/icons-material/Edit";

const UpdateForm = ({handleSubmit,handleForm,handleClose,rest}) => {
  // Birth Date
  const [dobDate, setDobDate] = useState(new Date(rest.DOB));
  useEffect(() => {
    const birthdate = document.getElementById('birthdate');
    birthdate.valueAsDate = dobDate;
  }, [dobDate]);

  // Join Date
  const[jdate,setJDate] = useState(new Date(rest.JoinDate))
  useEffect(() =>{
    const joindate = document.getElementById('joindate')
    joindate.valueAsDate=jdate;
  },[jdate])

  // End Date
  const[edate,setEDate] = useState(new Date(rest.JoinDate))
  useEffect(() =>{
    const enddate = document.getElementById('enddate')
    enddate.valueAsDate=edate;
  },[edate])

  //Toggle Readonly
  const [isEditable,setIsEditable] = useState(false);

  return (
    <div className="update-customer-form">
      <div className="update-head">
        <h1 style={{ textAlign: "center" }}>Update Details</h1>
        <EditIcon onClick={() => setIsEditable(true)}/>
      </div>
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        {/* <form onSubmit={handleFormSubmit}> */}
        <div className="form">
          <div className="try-input">
            <div className="form-left-side">
              <label>Name : {"  "}</label>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Name"
                defaultValue={rest.Name}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
            <div className="form-right-side">
              <label>Mobile No. : </label>
              <input
                type="number"
                id="mobilenum"
                name="Mobile"
                placeholder="Mobile No."
                defaultValue={rest.Mobile}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
          </div>
          <div className="try-input">
            <div className="form-left-side">
              <label>Date of Birth : {"  "}</label>
              <input
                type="date"
                id="birthdate"
                name="DOB"
                defaultValue={rest.DOB}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
            <div className="form-right-side">
              <label>Age : </label>
              <input
                type="number"
                id="age"
                name="Age"
                placeholder="Age"
                min="0"
                onChange={handleForm}
                defaultValue={rest.Age}
                readOnly={!isEditable}
                // required
              />
            </div>
          </div>

          <div className="try-input">
            <div className="form-left-side">
              <label>Height : {"  "}</label>
              <input
                type="number"
                id="height"
                name="Height"
                placeholder="Height"
                min="0"
                defaultValue={rest.Height}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
            <div className="form-right-side">
              <label>Weight : </label>
              <input
                type="number"
                id="weight"
                name="Weight"
                placeholder="Weight"
                min="0"
                defaultValue={rest.Weight}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
          </div>
          <div className="try-input">
            <div className="form-left-side">
              <label>Personal Training : {"  "}</label>
              <select
                name="PT"
                id="PT"
                onChange={handleForm}
                defaultValue={rest.PT}
                readOnly={!isEditable}
              >
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-right-side">
              <label>Address : </label>
              <input
                type="text"
                id="address"
                name="Address"
                placeholder="Address"
                min="0"
                defaultValue={rest.Address}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
          </div>
          <div className="try-input">
            <div className="form-left-side">
              <label>Join Date : {"  "}</label>
              <input
                type="date"
                id="joindate"
                name="JoinDate"
                defaultValue={rest.JoinDate}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
            <div className="form-right-side">
              <label>End Date : </label>
              <input
                type="date"
                id="enddate"
                name="EndDate"
                defaultValue={rest.EndDate}
                readOnly={!isEditable}
                onChange={handleForm}
                // required
              />
            </div>
          </div>
          <div className="try-input">
            <div className="form-left-side">
              <label>Fees Paid : {"  "}</label>
              <input
                type="number"
                min={"0"}
                id="feespaid"
                name="FeesPaid"
                placeholder="Fees Paid"
                defaultValue={rest.FeesPaid}
                onChange={handleForm}
                readOnly={!isEditable}
                // required
              />
            </div>
            <div className="form-right-side">
              <label>Fees Balance : </label>
              <input
                type="number"
                id="feesbalance"
                name="FeesBalance"
                placeholder="Amount Balance"
                defaultValue={rest.FeesBalance}
                onChange={handleForm}
                min={"0"}
                readOnly={!isEditable}
                // required
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p>
            {isEditable ? (
              <>
                <button type="submit" className="save-member">
                  Update
                </button>
              </>
            ) : null}
            <button type="button" className="save-member" onClick={handleClose}>
              Close
            </button>
            {/* <button
              type="button"
              className="save-member"
              onClick={() => setIsEditable(true)}
            >
              Edit
            </button> */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm