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
  const[jdate,setJDate] = useState(new Date(rest.AdmitDate))
  useEffect(() =>{
    const joindate = document.getElementById('joindate')
    joindate.valueAsDate=jdate;
  },[jdate])

  // End Date
  const[edate,setEDate] = useState(new Date(rest.EndDate))
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
            <div className="form-right-side">
            <label>Gender : </label>
              <select name="gender" id="gender"                 onChange={handleForm}
                defaultValue={rest.Gender}
                readOnly={!isEditable}>
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="try-input">
            <div className="form-left-side">
              <label>Admit Date : {"  "}</label>
              <input
                type="date"
                id="joindate"
                name="joindate"
                defaultValue={rest.AdmitDate}
                onChange={handleForm}
                readOnly={!isEditable}
              />
            </div>
            <div className="form-right-side">
            <label>Recover Date : </label>
              <input
                type="date"
                id="enddate"
                name="enddate"
                defaultValue={rest.EndDate}
                readOnly={!isEditable}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="try-input">
          <div className="left-text">
              <label>Address : </label>
            </div>
            <div className="right-intput">
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleForm}
                placeholder="Address"
                defaultValue={rest.Address}
              />
            </div>
          </div>
          <div className="try-input">
          <div className="left-text">
              <label>Treatments : </label>
            </div>
            <div className="right-intput">
              <input
                type="text"
                id="treatment"
                name="treatment"
                onChange={handleForm}
                placeholder="Treatments"
                defaultValue={rest.Treatments}
              />
            </div>
          </div>
          <div className="try-input">
            <div className="left-text">
              <label>Remarks : </label>
            </div>
            <div className="right-intput">
              <input
                type="text"
                id="remark"
                name="remark"
                onChange={handleForm}
                placeholder="Remarks"
                defaultValue={rest.Remarks}
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