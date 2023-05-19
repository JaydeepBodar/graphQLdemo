const { GraphQLInt, GraphQLString } = require("graphql");
const Usertype = require("../Typedef/User");
const args = {
  id: { type: GraphQLInt },
  firstName: { type: GraphQLString },
  lastName: { type: GraphQLString },
  extension: { type: GraphQLString },
  email: { type: GraphQLString },
  officeCode: { type: GraphQLString },
  reportsTo: { type: GraphQLString },
  jobTitle: { type: GraphQLString },
};
const employeeListdata = {
  type: Usertype,
  args: args,
  resolve: async (parent, args) => {
    console.log("object")
    let { dbConfig } = parent;
    const data=await dbConfig.employee.create({
      firstName: args.firstName,
      lastName: args.lastName,
      extension: args.extension,
      email: args.email,
      officeCode: args.officeCode,
      reportsTo: args.reportsTo,
      jobTitle: args.jobTitle,
    });
    console.log("data",data)
    return data
  },
};
const updateUser = {
  type: Usertype,
  args: args,
  resolve: async (parent, args) => {
    let { dbConfig } = parent;
    return await dbConfig.employee.update(
      {
        firstName: args.firstName,
        lastName: args.lastName,
        extension: args.extension,
        email: args.email,
        officeCode: args.officeCode,
        reportsTo: args.reportsTo,
        jobTitle: args.jobTitle,
      },
      { where: { id: args.id } }
    );
  },
};
const deleteUser = {
  type: Usertype,
  args: { id: { type: GraphQLInt } },
  resolve: async (parent, args) => {
    let { dbConfig } = parent;
    return await dbConfig.employee.destroy({ where: { id: args.id } });
  },
};
module.exports = { employeeListdata, updateUser, deleteUser };
