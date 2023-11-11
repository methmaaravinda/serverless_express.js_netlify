const mongoose=require("mongoose");
require('dotenv').config();

const dbConnection=async(req, res)=>{
    try{
        await mongoose.connect(
            process.env.MONGO_DB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        res.json({message: "success to connected with db"})
    }catch(err){
        res.json({error: "fail to connect db !"})
        console.error(err);
    }
}

module.exports=dbConnection;