import { gql } from "@apollo/client";
import React from "react";
import "./App.css";
import { getUser_Details } from "./Graphql/Query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
const User = () => {
  const { data } = useQuery(getUser_Details);
  return (
    <div style={{ padding: "0px 15px" }}>
          <button className="btn"><Link style={{color:"#fff",textDecoration:"none",display:"inline-block"}} to="/adduser">addUser</Link></button>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>extention</th>
            <th>email</th>
            <th>office code</th>
            <th>reportsTo</th>
            <th>jobtitle</th>
          </tr>
        </thead>
        <tbody>
          {data?.employee.map((val, index) => {
            const {
              email,
              extension,
              firstName,
              jobTitle,
              lastName,
              officeCode,
              reportsTo,
            } = val;
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{extension}</td>
                <td>{email}</td>
                <td>{officeCode}</td>
                <td>{reportsTo}</td>
                <td>{jobTitle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
