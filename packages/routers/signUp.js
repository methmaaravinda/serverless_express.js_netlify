const express=require("express");
const router=express.Router();
const dbCoonection=require("../../packages/config/dbConnection")

router.route("/")
    .get(async(req, res)=>{
        // console.log( process.env.MONGO_DB_URI)
        // res.json({message:"signUp router1"+ process.env.MONGO_DB_URI})
        dbCoonection(req, res);
    })

module.exports=router;