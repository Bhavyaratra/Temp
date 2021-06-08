var mongoose=require("mongoose");
 
const addressSchema=new mongoose.Schema(
    {
        
        Address:{
            type:String,
            index:true
        }
    },
    {
        timestamps:true
    }
)
 
module.exports=new mongoose.model('Address',addressSchema);