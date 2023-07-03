const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
       type : String,
       required: [true, "Please add contact name"], 
    },
    email:{
       type : String,
       required: [true, "Please add contact email address"], 
       unique:[true,"Email address already taken"],
    },
    password:{
       type : String,
       required: [true, "Please add user password"], 
    },
},{
    timeStamps : true,
});

module.exports = mongoose.model('User',userSchema);