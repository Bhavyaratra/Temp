var mongoose=require("mongoose");
 
const userSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            index:true
        },
        Email:{
            type:String,
            index:true
        },
        Password:{
            type:String,
            index:true
        },
        Personal:{
            type:mongoose.Types.ObjectId,
            ref:'Personal'
        },
        Address:
        {
            type:String,
            ref:'Address'
        },
        Contact:
        {
            type:mongoose.Types.ObjectId,
            ref:'Contact'
        }
    },
    {
        timestamps:true
    }
)
 
module.exports=new mongoose.model('User',userSchema);
