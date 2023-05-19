const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");
const Userdata = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    jobTitle: { type: GraphQLString },
    phoneNo: { type: GraphQLString },
    email: { type: GraphQLString },
    reportsTo: { type: GraphQLString },
    extension: { type: GraphQLString },
    officeCode: { type: GraphQLString },
  }),
});
module.exports = Userdata;
