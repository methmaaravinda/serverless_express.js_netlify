const mongoose=require("mongoose");
const ProfileSchema=new mongoose.Schema(
    {
        id: Number,
        email: String,
        first_name: String,
        last_name: String,
        avatar: String
    }
);

const Profile=mongoose.model('Profile', ProfileSchema);
module.exports=Profile;