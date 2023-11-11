const express=require("express");
const router=express.Router();

router.route("/")
    .get((req, res)=>{
        console.log( process.env.MONGO_DB_URI)
        res.json({message:"signUp router"})
    })

module.exports=router;