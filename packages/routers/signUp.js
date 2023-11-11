const express=require("express");
const router=express.Router();
const User=require("../model/UserModel");


router.route("/")
    .get(async(req, res)=>{
        const user={email: "testing 01", password:"123"};
        try{
            await User.create(user);
            res.json({user});
        }catch(err){
            res.json({err})
        }
    })

module.exports=router;