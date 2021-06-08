var mongoose=require('mongoose');

const ratingSchema= new mongoose.Schema(
    {
        Rating:{
            type: Number,
            //required:[true,'rating not included']
        }
    }
)

module.exports =new mongoose.model('Ratings',ratingSchema);
