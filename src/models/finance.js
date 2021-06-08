var mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    User:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    Employee:{
        type:mongoose.Types.ObjectId,
        ref:'Employee'
    }
},
    {
        timestamps:true
    }

)

module.exports = new mongoose.model('Finance',financeSchema);