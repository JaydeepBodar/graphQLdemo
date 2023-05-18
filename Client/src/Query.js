import { gql } from "@apollo/client";
export const getUser_Details = gql`
  {
    employee {
      firstName
      lastName
      extension
      email
      officeCode
      reportsTo
      jobTitle
    }
  }
`;
