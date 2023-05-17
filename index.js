const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const cors = require("cors");
const schema=require('./model/demoSchema')
dotenv.config();
require("./db")
const app = express();
app.use(express.json());
app.use(cors("*"));
app.use(
  "/grapql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("err shown");
  } else {
    console.log(`server connected successfully on ${process.env.PORT}`);
  }
});
