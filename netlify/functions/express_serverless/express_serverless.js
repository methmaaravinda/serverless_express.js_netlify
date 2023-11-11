const express=require("express");
const serverless=require("serverless-http");
const app=express();
const path=require("path")

app.use('/login',require("../../../packages/routers/login") );
app.use('/signUp',require(path.join(__dirname,"..", "..", "..", "packages", "routers", "signUp")) );


module.exports.handler=serverless(app);