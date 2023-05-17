const {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");
const db=require("../db")
const employee=db.employee
const Userdata = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    jobTitle:{type:GraphQLString},
    phoneNo: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});
const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    userData: {
      type: new GraphQLList(Userdata),
      resolve:(parent, args)=>{
        let data = [
          {
            id: 1,
            fullname: "jay patel",
            phoneNo: 7878787878,
            email: "j1@gmail.com",
          },          {
            id: 2,
            fullname: "deep patel",
            phoneNo: 8787878787,
            email: "d1@gmail.com",
          },
        ]
        return data;
      },
    },
    newuserData:{
        type: new GraphQLList(Userdata),
        resolve:async(parent, args)=>{
          let data = await employee.findAll()
          return data;
        },
    }
  },
});
module.exports=new GraphQLSchema({query:rootQuery})