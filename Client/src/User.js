import { gql } from '@apollo/client'
import React from 'react'
import {getUser_Details} from "./Query"
import { useQuery } from '@apollo/client'
const User = () => {
    const {data}=useQuery(getUser_Details)
    console.log("data",data)
  return (
    <table border="1">
      <thead>
        <th>
            <td>no</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>extention</td>
            <td>email</td>
            <td>office code</td>
            <td>reportsTo</td>
            <td>jobtitle</td>
        </th>
      </thead>
    </table>
  )
}

export default User
