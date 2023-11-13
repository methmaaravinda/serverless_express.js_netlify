const express=require("express");
const router=express.Router();

router.route("/")
    .get((req, res)=>{
        res.json({msg: "pass the verify middleware !"})
    })