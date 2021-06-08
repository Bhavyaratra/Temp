var mongoose=require('mongoose');

const reviewSchema= new mongoose.Schema(
    {   
          Review:{  
            type: String,
            //required:[true,'Review not included']
          }
    },{timestamps:true}
)

module.exports =new mongoose.model('Reviews',reviewSchema);
