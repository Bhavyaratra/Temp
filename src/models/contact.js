var mongoose=require("mongoose");
 
var contactSchema = new mongoose.Schema({
    
    Contact: { type: Number, index: true }
   
},
{
    timestamps:true
}
)
module.exports=new mongoose.model('Contact',contactSchema);
