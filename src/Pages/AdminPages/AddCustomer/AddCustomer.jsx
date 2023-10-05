import { React, useState } from "react";
import "./AddCustomer.css";
import axios from "axios";
axios.defaults.baseURl = "http://localhost:8080/";

const AddCustomer = () => {
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    if (name === "mobilenum") {
      if (value.length !== 10 || value < 0 || value > 9999999999) {
        input.setCustomValidity("Please enter a valid 10-digit mobile number.");
      } else {
        input.setCustomValidity("");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  // -------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/addMember", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response);
        alert("Member Successfully added.");
      }
    } catch (error) {
      alert("Something Went Wrong!");
      console.log(error);
    }
  };

  return (
    <div className="add-customer-form">
      <h1 style={{ textAlign: "center" }}>Patient Registration Form</h1>
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="try-input">
            <div className="form-left-side">
              <label> Patient Name : {"  "}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleForm}
                required
              />
            </div>
            <div className="form-right-side">
              <label>Mobile No. : </label>
              <input
                type="number"
                id="mobilenum"
                name="mobilenum"
                placeholder="Mobile No."
                onChange={handleForm}
                pattern="[0-9]{10}"
                title="Mobile number must be 10 digits"
                required
              />
            </div>
          </div>
          <div className="try-input">
            <div className="form-left-side">
              <label>Date of Birth : {"  "}</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                onChange={handleForm}
                required
              />
            </div>
            <div className="form-right-side">
              <label>Age : </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                min="0"
                onChange={handleForm}
                required
              />
            </div>
          </div>

          <div className="try-input">
            <div className="form-left-side">
              <label>Weight : </label>
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="Weight"
                min="0"
                onChange={handleForm}
                required
              />
            </div>
            <div className="form-right-side">
              <label>Gender : </label>
              <select name="gender" id="gender" onChange={handleForm}>
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
                onChange={handleForm}
                required
              />
            </div>
            <div className="form-right-side">
              <label>Recover Date : </label>
              <input
                type="date"
                id="enddate"
                name="enddate"
                onChange={handleForm}
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p>
            <button type="submit" className="save-member">
              Save
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
