var mongoose=require("mongoose");
 
const personalSchema=new mongoose.Schema(
    {
        
        Gender:{
            type:String,
            required:[true,"gender is required"],
            index:true
        },
        City:{
            type:String,
            required:[true,"City is required"],
            index:true

        },
        Mobile:{
            type:Number,
            index:true
        }
    },
    {
        timestamps:true
    }
)
 
module.exports=new mongoose.model('Personal',personalSchema);