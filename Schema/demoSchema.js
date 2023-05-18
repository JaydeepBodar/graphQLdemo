const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { employeeList, userdata,Customerlist,indivisialCustomer } = require("./Query/Query");
const {employeeListdata,updateUser,deleteUser}=require("../Schema/Mutation/Mutation")
const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    userData: userdata,
    employee: employeeList,
    customerdata:Customerlist,
    randomCustomer:indivisialCustomer
  },
});
const mutationDemo= new GraphQLObjectType({
  name:"mutation",
  fields:{
    Useradd:employeeListdata,
    Update_User:updateUser,
    Delete_User:deleteUser
  }
})
module.exports = new GraphQLSchema({ query: rootQuery,mutation:mutationDemo });
