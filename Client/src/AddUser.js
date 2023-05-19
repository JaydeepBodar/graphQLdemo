import React, { useState } from "react";
import Inputdata from "./Inputdata";
import "./App.css";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addUser } from "./Graphql/Mutation";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const [Input, setInput] = useState({
    firstName: "",
    lastName: "",
    extension: "",
    email: "",
    officeCode: "",
    reportsTo: "",
    jobTitle: "",
  });
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    extension,
    email,
    officeCode,
    reportsTo,
    jobTitle,
  } = Input;
  const [Useradd, { error }] = useMutation(addUser);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...Input, [name]: value });
    console.log({ ...Input });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName &&
      !lastName &&
      !extension &&
      !reportsTo &&
      !jobTitle &&
      !email &&
      !officeCode
    ) {
      toast.error("all field required");
      return;
    } else {
      Useradd({
        variables: Input,
      });
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <Inputdata
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          label="FirstName"
          placeholder="Enter FirstName..."
        />
        <Inputdata
          label="LastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Enter LastName..."
        />
        <Inputdata
          label="Extension"
          type="text"
          name="extension"
          value={extension}
          onChange={handleChange}
          placeholder="Enter Extension..."
        />
        <Inputdata
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter Email..."
        />
        <Inputdata
          label="OfficeCode"
          type="text"
          name="officeCode"
          value={officeCode}
          onChange={handleChange}
          placeholder="Enter OfficeCode..."
        />
        <Inputdata
          label="ReportsTo"
          type="text"
          name="reportsTo"
          value={reportsTo}
          onChange={handleChange}
          placeholder="Enter ReportsTo..."
        />
        <Inputdata
          label="JobTitle"
          type="text"
          value={jobTitle}
          onChange={handleChange}
          name="jobTitle"
          placeholder="Enter JobTitle"
        />
        <div className="form-btn">
          <button className="btn">Add User</button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddUser;
