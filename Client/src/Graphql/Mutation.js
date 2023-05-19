import { gql } from "@apollo/client";
export const addUser = gql`
    mutation newUseradd($firstName:String!,$lastName:String!,$extension:String!,$email:String!,$officeCode:String!,$reportsTo:String!,$jobTitle:String!){
        Useradd(firstName:$firstName,lastName:$lastName,extension:$extension,email:$email,officeCode:$officeCode,reportsTo:$reportsTo,jobTitle:$jobTitle){
            firstName,
            lastName,
            extension,
            email,
            officeCode,
            reportsTo,
            jobTitle
        }
    }
`
