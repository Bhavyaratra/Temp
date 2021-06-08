var mongoose=require('mongoose');

const GstSchema= new mongoose.Schema(
    {
        Gst:{
            type: Number,
            //required:[true,'Gst not included']
        }
    }
)

module.exports =new mongoose.model('Gsts',GstSchema);
