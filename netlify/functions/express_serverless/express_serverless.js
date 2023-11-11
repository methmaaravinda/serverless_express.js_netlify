const express=require("express");
const serverless=require("serverless-http");

const app=express();

const router=express.Router();
app.get("/", (req, res)=>{
  res.json({suceess: "from server edited!"})
})
router.get('/',(req, res)=>{
    console.log(req.method);
    res.json({message:"get request to serverless !"})
})

app.use('/.netlify/functions/express_serverless', router)

module.exports.handler=serverless(app);