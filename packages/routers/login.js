const express=require("express");
const router=express.Router();

router.route("/")
    .get((req, res)=>{
        res.json({message:"login router"})
    })

module.exports=router;