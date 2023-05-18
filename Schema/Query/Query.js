const { GraphQLList, GraphQLInt } = require("graphql");
const Userdata = require("../Typedef/User");
const Customer=require("../Typedef/Customer")
const employeeList = {
  type: new GraphQLList(Userdata),
  resolve: async (parent, args,context) => {
		let contextdata=await context()
		console.log("host",contextdata.host,"token",contextdata.token)
		let {dbConfig}=parent;
    let data = await dbConfig.employee.findAll();
    return data;
  },
};
const Customerlist={
	type:new GraphQLList(Customer),
	resolve:async(parent,args)=>{
		let {dbConfig}=parent
		let customer=await dbConfig.customers.findAll();
		return customer;
	}
}
const userdata = {
  type: new GraphQLList(Userdata),
  resolve: (parent, args) => {
    let data = [
      {
        id: 1,
        fullname: "jay patel",
        phoneNo: 7878787878,
        email: "j1@gmail.com",
      },
      {
        id: 2,
        fullname: "deep patel",
        phoneNo: 8787878787,
        email: "d1@gmail.com",
      },
    ];
    return data;
  },
};
const indivisialCustomer={
	type:new GraphQLList(Customer),
	args:{
		id:{type:GraphQLInt}
	},
	resolve:async(parent,args)=>{
		const {dbConfig}=parent
		return await dbConfig.customers.findAll({where:{id:args.id}})
	}
}
module.exports = { employeeList, userdata,Customerlist,indivisialCustomer };
