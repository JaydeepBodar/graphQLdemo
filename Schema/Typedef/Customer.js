const {GraphQLInt,GraphQLString,GraphQLObjectType}=require('graphql')
const Customers=new GraphQLObjectType({
    name:"customer",
    fields:()=>({
        id:{type:GraphQLInt},
        customerName:{type:GraphQLString},
        contactLastName:{type:GraphQLString},
        contactFirstName:{type:GraphQLString},
        phone:{type:GraphQLString},
        addressLine1:{type:GraphQLString},
        addressLine2:{type:GraphQLString},
        city:{type:GraphQLString},
        state:{type:GraphQLString},
        postalCode:{type:GraphQLString},
        country:{type:GraphQLString},
        salesRepEmployeeNumber:{type:GraphQLInt}
    })
})
module.exports=Customers