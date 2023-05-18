const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const cors = require("cors");
const schema = require("./Schema/demoSchema");
dotenv.config();
require("./db");
const app = express();
app.use(express.json());
app.use(cors("*"));
const db=require("./db")
const root={
  ip:"127.0.0.0",
  dbConfig:db
}
const context=async(req)=>{
  const host=req.headers.host
  const token="sssss"
  return {token,host}
}
app.use(
  "/grapql",
  graphqlHTTP(async(req)=>({
    schema,
    graphiql: true,
    rootValue:root,
    context:()=>context(req)
  }))
);
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("err shown");
  } else {
    console.log(`server connected successfully on ${process.env.PORT}`);
  }
});
