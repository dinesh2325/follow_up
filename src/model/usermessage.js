const mongoose=require("mongoose");
const validator=require('validator')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value))
            {
                throw new Error("invalid")
            }
        }
    },
    message:{
        type:String,
        required:true,
        minlength:3
    }
})

//make a collection

const User=mongoose.model("User",userSchema);
module.exports=User;