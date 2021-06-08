var mongoose=require('mongoose');

const productSchema= new mongoose.Schema(
    {   
        Brand:{
            type:String,
            required:[true,'Brand is required']
        },
        Description:{
            type:String,
            required:[true,'Description is required']
        },
        Price:{
            type:Number,
            required:[true,'Price is required']
        },
        Availability:{
            type:String,
            required:[true,'Availabilty is required']
        },
        Manufacturer:{
            type:String,
            required:[true,'manufacturer is required']
        },
        Color:{
            type:String,
            required:[true,'Color is required']
        },
        Fit:{
            type:String
        },
        Pattern:{
            type:String,
        },
        Fabric:{
            type:String,
        },
        Ratings:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Ratings'
        },
        Reviews:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Reviews'

        },
        Gsts:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Gsts'

        }
    }
    ,{timestamps:true}
)

module.exports =new mongoose.model('Products',productSchema);
