const express=require("express");
const serverless=require("serverless-http");
const mongoose=require("mongoose");
const app=express();
require('dotenv').config();
const cors=require("cors");
const dbConnection=require("../../../packages/config/dbConnection");
dbConnection();

app.use(express.json())
app.use(cors(require("../../../packages/config/corsOptions")))
app.use('/login',require("../../../packages/routers/login") );
app.use('/signUp',require("../../../packages/routers/signUp") );


module.exports.handler = serverless(async (event, context) => {
  console.log("connected to server")
  mongoose.connection.once('open', ()=>{
    console.log("connected to DB");
  })
  const result = await app(event, context);
  return result;
});