const express=require("express");
const serverless=require("serverless-http");
const mongoose=require("mongoose");
const app=express();
const path=require("path");
// const dbConnection=require(path.join(__dirname,"..", "..", "..", "packages", "config", "dbConnection"));
// dbConnection();

app.use('/login',require("../../../packages/routers/login") );
app.use('/signUp',require(path.join(__dirname,"..", "..", "..", "packages", "routers", "signUp")) );


module.exports.handler = serverless(async (event, context) => {
  console.log("connected to server")
  mongoose.connection.once('open', ()=>{
    console.log("connected to DB");
  })
  const result = await app(event, context);
  return result;
});