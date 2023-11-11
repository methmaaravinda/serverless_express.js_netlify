// const mongoose=require("mongoose");
// require('dotenv').config();

// const dbConnection=async(req, res)=>{
//     try{
//         await mongoose.connect(
//             process.env.MONGO_DB_URI,
//             { useNewUrlParser: true, useUnifiedTopology: true }
//         );
//         const db = mongoose.connection.db;
//         const dbName = await db.databaseName;
//         res.json({message: "success to connected with db"+dbName})
//     }catch(err){
//         res.json({error: "fail to connect db !"})
//         console.error(err);
//     }
// }

// module.exports=dbConnection;

const mongoose=require("mongoose");
require('dotenv').config();

const dbConnection=async()=>{
    try{
        mongoose.connect(
            process.env.MONGO_DB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
    }catch(err){
        console.error(err);
    }
}

module.exports=dbConnection;