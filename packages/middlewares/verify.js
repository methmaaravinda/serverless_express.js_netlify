const express=require("express");
const router=express.Router();
const User=require("../model/UserModel");
const jwt=require("jsonwebtoken");
require("dotenv").config();

router.use(async(req, res, next)=>{
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    console.log("accesstoken/verify : "+accessToken);
    if(!accessToken) return res.json({accessToken, errMsg: "accessToken not found !"})
    try{
        const findUser=User.findOne({accessToken});
        if(!findUser) {res.status(403).json({error: "user doesn't exist!"})}
        if(findUser){
            try{
                const decoded=jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
                console.log(decoded);
                next()
            }catch(err){
                res.status(403).json({err});
            }
        }
        
    }catch(err){
        res.status(500).json({error: err, error_msg: "server error - finding user!"})
    }
    
})

module.exports=router;