const express=require("express");
const router=express.Router();
const User=require("../model/UserModel");


router.route('/')
    .post((req, res)=>{
        const email=req.body?.user?.email;
        const password=req.body?.user?.password;
        const user={email,password};
        if(email && password){
            (async()=>{
                try{
                    await User.create(user);
                    res.json(user);
                }catch(err){
                    res.json(err)
                }
            })()
        }else return res.json({error : "no user object !"})
    })
module.exports=router;

// const express=require("express");
// const router=express.Router();
// const User=require('../model/userModel')

// router.route('/')
//     .post((req, res)=>{
//         const email=req.body?.user?.email;
//         const password=req.body?.user?.password;
//         const user={email,password};
//         if(email && password){
//             (async()=>{
//                 try{
//                     await User.create(user);
//                     res.json(user);
//                 }catch(err){
//                     res.json(err)
//                 }
//             })()
//         }else return res.json({error : "no user object !"})
//     })
   


// module.exports=router;