const express=require("express");
const router=express.Router();
const Profile=require("../model/ProfileModel");

router.route("/")
    .post(async(req, res)=>{
        const id=Number(req?.params?.id);
        if(String(id)==="NaN") return res.json({error: "params not valid ! "})
        try{
            const profiles=await Profile.find().sort({ createdAt: -1 }).limit(6*id);
            res.json({profiles});
        }catch(err){
            res.status(500).json({error_msg: "error finding profiles !", error: err});
        }
    })

module.exports=router;

